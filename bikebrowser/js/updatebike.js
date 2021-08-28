let form=document.querySelector('#updateform');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let id=document.querySelector('#id').value;
    let name=document.querySelector('#name').value;
    let company=document.querySelector('#company').value;
    let status=document.querySelector('#status').value;
   // let picture=document.querySelector('#pictue').files[0];

    let data=new FormData();
    data.append('name',name);
    data.append('company',company);
    data.append('status',status);
    //data.append('picture',picture);
    data.append('id',id);
    let url='http://localhost/bikebrowser/updatebike.php';
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true)
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('bike updated');
        }
        else
        {
            console.log('errir occured');
        }
    
    }
    xhr.send(data);

});