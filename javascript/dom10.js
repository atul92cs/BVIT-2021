addmovie=(e)=>{
    e.preventDefault();
    //let name=document.querySelector('#name').value;
   //let director=document.querySelector('#director').value;
   // let genre=document.querySelector('#genre').value;
    let name=document.getElementById('name').value;
    let url='http://localhost/director/add';
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    let params=`name= ${name}`;
   // xhr.setRequestHeader('Content-type','application/x-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('Director added');
        }
        else
        {
            console.log(`error occured ${xhr.responseText}`);
        }
    }
    xhr.send(params);
}
let userform=document.querySelector('#director-form');
userform.addEventListener('submit',addmovie);
