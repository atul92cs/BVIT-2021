let form=document.querySelector('#pictureform');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let picture=document.querySelector('#picture').files[0];
    let image=document.querySelector('#image');
    image.src=window.URL.createObjectURL(picture);
    
    
});