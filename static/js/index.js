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
    
    let obj ={name:name, email:email, text:text};
        document.getElementById('name').value = '';
        document.getElementById('email').value='';
        document.getElementById('textarea').value='';
        document.body.classList.remove('disable');
        form.classList.add('hide');
        fetch(`/`, {
            headers:{
                'Content-Type':'application/json'
            },
            method : 'POST',
            body: JSON.stringify(obj)
        }).then((res) =>{
          return res.json()
        }).then((data)=>{
            console.log(data.text);
        }).catch(err => {
            throw err;
        })
    
    
    
}