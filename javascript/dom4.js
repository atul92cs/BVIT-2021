let heading=document.querySelector('.Heading');
heading.parentElement.style.backgroundColor='cyan';
let sunheading=heading.nextElementSibling;
sunheading.innerHTML='Manipulated by Dom';
let extratext='Using vanilla javascript';
let subheading=document.createElement('p');
let subheadingtext=document.createTextNode(extratext);
subheading.appendChild(subheadingtext);
heading.parentElement.appendChild(subheading);