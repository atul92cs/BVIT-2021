let form=document.querySelector('#creategenre');
let url='http://localhost/musiclib/creategenre.php';
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let data={
        "name":name
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('genre created');
        }
        else
        {
            console.log('error occrured');
        }
    }
    xhr.send(params);
});
