const http = require('http');
const fs = require('fs');
const path =  require('path');
const nodemailer = require("nodemailer");
const emailTemplate = require("./emailTemplate");
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

 

if(process.env.NODE_ENV != "production"){
    const dotenv = require("dotenv");
    const result = dotenv.config();

    if(result.error){
        throw error;
    }

}

const oauth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, "https://developers.google.com/oauthplayground");
oauth2Client.setCredentials({
    refresh_token:process.env.REFRESH_TOKEN
});

const accessToken = oauth2Client.getAccessToken();

const server = http.createServer((req, res) =>{
    const {headers, method, url} = req;

    if(method=='POST'){
        const decoder = new TextDecoder('utf8');
        let buffer = '';
        req.on('data', chunk => {
            buffer+= decoder.decode(chunk);
        }).on('end', () => {

        const {name, email, text} = JSON.parse(buffer);

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: "OAuth2",
                user: process.env.MY_MAIL,
                clientId: process.env.CLIENT_ID,
                clientSecret:process.env.CLIENT_SECRET,
                refreshToken:process.env.REFRESH_TOKEN,
                accessToken:accessToken
            }
        })

        let mail = emailTemplate.emailTemplate(name, email);

        let mailOptions1 = {
            from: `Aniedi from Cloak <jirapzo7@gmail.com>`,
            to:  email,
            subject: `We got your message`,
            html: mail
        }

        let mailOptions2 = {
            from: `Cloak <jirapzo7@gmail.com>`,
            to:  process.env.ALERT_MAIL,
            subject: `URGENT! ${name} made contact`,
            html: `<p>${text}, mail:${email}</p>`
        }

        transporter.sendMail(mailOptions1, (err, data) =>{
            if(err){
                throw err;
            }
        })

        transporter.sendMail(mailOptions2, (err, data) =>{
            if(err){
                throw err;
            }
            
        })
        
        res.writeHead(200, {'Content-Type' : 'application/json'});    
        res.write(JSON.stringify({text:"Thanks for reaching out, we'll get back to you soon"}), (err)=>{if(err){throw err}})      
        res.end();
        })
        
    }

    else{
            let filePath = path.join(__dirname, 
        'static',
        url === '/' ? 'index.html' : url
        );

        let extname = path.extname(filePath);
        let contentType = 'text/html';

        switch(extname){
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
            case '.jpeg':
                contentType = 'image/jpeg';
                break;
        }


   
            fs.readFile(filePath, (err, data) => {
                if(err){
                    if(err.code === 'ENOENT'){
    
                        fs.readFile(path.join(__dirname, 'static', '404.html'), (err, data) => {
                            res.writeHead(200, {'Content-Type' : 'text/html'});
                            res.end(data, 'utf8');
                        })
                    }
    
                    else{
                        res.writeHead(500);
                        res.end(`Server Error : ${err.code}`)
                    }
                }
                
                else {
                    res.writeHead(200, {'Content-Type' : contentType});
                     res.end(data, 'utf8');
                }
            })
    }
       
})


const PORT  = process.env.PORT || 3000;
server.listen(PORT, ()=> console.log('running'));

