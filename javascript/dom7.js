let button=document.querySelector('#Color_change_button');
button.addEventListener('click',(e)=>{
    e.preventDefault();
    let body=document.getElementsByTagName('body');
    body[0].style.backgroundColor='red';
    
});
let body=document.getElementsByTagName('body');
body[0].addEventListener('load',()=>{
   
});

//alertuser=()=>{
  //  alert('this is an dom operated page');
//}