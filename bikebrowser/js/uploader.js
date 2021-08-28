let form=document.querySelector('#bikeform');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name=document.querySelector('#name').value;
    let company=document.querySelector('#company').value;
    let status=document.querySelector('#status').value;
    let picture=document.querySelector('#picture').files[0];
    let data=new FormData();
    console.log(picture);
   data.append('name',name);
    data.append('status',status);
    data.append('company',company);
    data.append('picture',picture);
    
    let xhr=new XMLHttpRequest();
    let url='http://localhost/bikebrowser/createbike.php';
    xhr.open('POST',url,true);
    xhr.onload=()=>{
        if(xhr.response==200||xhr.readyState==4)
        {
            console.log('bike created');
        }
        else
        {
            console.log('error occured');
        }
    }
    xhr.send(data);
});