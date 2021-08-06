let form=document.querySelector('#submit-button');
form.addEventListener('click',(e)=>{
    e.preventDefault();
    let name=document.querySelector('#name');
    let email=document.querySelector('#email');
    let phone=document.querySelector('#phone');
    console.log(name.value);
    console.log(email.value);
    console.log(phone.value);
});