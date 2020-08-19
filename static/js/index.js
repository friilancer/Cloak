document.getElementById('formControlOpen').onclick = () => {
    let form = document.getElementById('formContainer');
    form.classList.remove('hide');
    document.body.classList.add('disable');
}

document.getElementById('formControlClose').onclick = () =>{
    let form = document.getElementById('formContainer');
    form.classList.add('hide');
    document.body.classList.remove('disable');
}

document.getElementById('submit').onclick = () =>{
    let form = document.getElementById('formContainer');
    event.preventDefault();
    let name= document.getElementById('name').value.trim().toString();
    let email= document.getElementById('email').value.trim().toString().toLowerCase();
    let text= document.getElementById('textarea').value.trim().toString();    
    const obj = {name, email, text};
    
    for(let data in obj){
        if(obj[data].length == 0){
            document.getElementById('formError').textContent = `Please fill in ${data}`;
            return;
        }

        else if(obj[data].length < 3){
            document.getElementById('formError').textContent = `${data} provided seems incomplete`;
            return;
        }
    }
    document.getElementById('name').value = '';
    document.getElementById('email').value='';
    document.getElementById('textarea').value='';
    fetch(`/`, {
        headers:{
            'Content-Type':'application/json'
            },
        method : 'POST',
        body: JSON.stringify(obj)
    }).then((res) =>
        res.json()
    ).then((data)=>{
        document.getElementById('formError').textContent = 'Message Received';
        console.log(data.text);
    }).catch(err => {
        throw err;
    })
    setTimeout(()=>{
        form.classList.add('hide');
        document.body.classList.remove('disable');
        document.getElementById('formError').textContent = '';
     }, 2500);   
}