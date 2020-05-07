const emailTemplate = (name, email) =>{

    let html = `<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        <style type="text/css">
            .tableHeader{
                width: 50%;
            }
            .tableBody{
                width: 55%;
            }
            @media screen and (max-width: 500px){
                .tableHeader{
                    width: 80%;
                }
    
                .tableBody{
                    width: 90%;
                }
            }
        </style>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif;">
    
        <!--Spacer-->
        <table style="height: 100; width: 100%;">
            <tbody>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
        </table>
        <table border="0" align="center" width="100%" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td align="center" valign="top">
                        <table class="tableBody" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="center" valign="top">
                                        <table border="0"  width="100%" cellpadding="5" cellspacing="0">
                                            <tbody>
                                                <tr >
                                                    <td>
                                                        <img style="display: block; height: 40px; width: 60px;" src="https://res.cloudinary.com/friilancer/image/upload/v1588524936/Cloak/fkx6gkgi6pyqqmpekznh.png" alt="">
                                                    </td>                                                
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="tableHeader" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="center" valign="top">
                                        <table border="0" align="center" width="100%" cellpadding="0" cellspacing="0">
                                            <tbody>
                                                <tr>
                                                    <td style="color:#00A0C6; font-size: 30px; font-weight: bold;" align="center" valign="top">
                                                       Welcome to Cloak
                                                    </td>
                                                </tr>
                                                <tr style="height: 50;">
                                                    <td></td>
                                                    <td></td>                                            
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!--Letter body-->
                        <table class="tableBody" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="center" valign="top">
                                        <table border="0"  width="100%" cellpadding="10" cellspacing="0">
                                            <tbody>
                                                <tr >
                                                    <td style="text-align:left;">
                                                        Hey,
                                                    </td>                                                
                                                </tr>
                                                <tr>
                                                    <td>
                                                        I'm Aniedi, and I'm from the cloak team.
                                                        Thank you for contacting us.<br><br>
                                                        I'm glad you reached out and I'm excited at the prospect of creating
                                                        something awesome with you.
                                                        You are very important to us, all information received will always 
                                                        remain confidential.<br><br>
                                                        We are reviewing your message and will contact you soon!                                                                                                   
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!--Letter footer-->
                        <table class="tableBody" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="center" valign="top">
                                        <table border="0"  width="100%" cellpadding="5" cellspacing="0">
                                            <tbody>
                                                <tr >
                                                    <td style="text-align:right; font-weight: bold;">
                                                        Aniedi Etukudo
                                                    </td>                                                
                                                </tr>
                                                <tr >
                                                    <td style="text-align:right;">
                                                        Cloak
                                                    </td>                                                
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
    
    
                        <!--Spacer-->
                        <table style="height: 50; width: 100%;">
                            <tbody>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tbody>
                        </table>
                        <!--Team Cloak Footer-->
                        <table class="tableBody" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="center" valign="top">
                                        <table border="0"  width="100%" cellpadding="0" cellspacing="0">
                                            <tbody>
                                                <tr >
                                                    <td style="text-align:left; color: #ffffff; background-color: #010f3b; font-weight: bold; font-size: 18px; letter-spacing: 1px; padding: 10 10; height: 50;">
                                                    &nbsp;&nbsp;TEAM CLOAK
                                                    </td>                                                
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
    
    
                        <!--Spacer-->
                        <table style="height: 20; width: 100%;">
                            <tbody>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tbody>
                        </table>
    
                        <table class="tableBody" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="center" valign="top">
                                        <table border="0"  width="100%" cellpadding="1" cellspacing="0">
                                            <tbody>
                                                <tr >
                                                    <td style="text-align:left; font-size: 12px; padding:0 0 0 10; color: #575555; font-style: italic;">
                                                        This email was sent to ${email}
                                                    </td>                                                
                                                </tr>
                                                <tr >
                                                    <td style="text-align:left; font-size: 12px; padding:0 0 0 10; color: #575555; font-style: italic;">
                                                        You received this email because you contacted Team Cloak.
                                                    </td>                                                
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </body>
    </html>`;
    return html;
}

module.exports = {emailTemplate:emailTemplate};