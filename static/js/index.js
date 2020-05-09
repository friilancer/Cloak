document.getElementById('formControlOpen').onclick = () => {
    let form = document.getElementById('formContainer');
    console.log(document.body.style.width);
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
    form.classList.add('hide');    
    let obj ={name:name, email:email, text:text};
    document.getElementById('name').value = '';
    document.getElementById('email').value='';
    document.getElementById('textarea').value='';
    document.body.classList.remove('disable');
    fetch(`/`, {
        headers:{
            'Content-Type':'application/json'
            },
        method : 'POST',
        body: JSON.stringify(obj)
    }).then((res) =>{
      return res.json()
    }).then((data)=>{
        document.getElementById('responseMessage').textContent = data.text;
    }).catch(err => {
        throw err;
    })
    setTimeout(()=>{
        document.getElementById('responseMessage').classList.add('hide');
     }, 2000)   
    
}