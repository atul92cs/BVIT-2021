getgenre=()=>{
    let url='http://localhost/musiclib/getgenre.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            let response=JSON.parse(xhr.responseText);
            let {genre}=response;
            genre.forEach(gr=>{
                let genrelist=document.querySelector('#genre');
                let geel=document.createElement('option');
                let eltxt=document.createTextNode(gr.name);
                 geel.value=gr.id;
                 geel.appendChild(eltxt);
                 genrelist.appendChild(geel);
            
            });
        }
        else
        {
            console.log('error occured');
        }
    }
    xhr.send();
}
getgenre();
createArtist=(e)=>{
    let url='http://localhost/musiclib/createartist.php';
    e.preventDefault();
    let name=document.querySelector('#name').value;
    let genre=document.querySelector('#genre').value;
    let data={
        "name":name,
        "genre":genre
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.responseText==200)
        {
            let message=document.createElement('h2');
            let msgtxt=document.createTextNode(`Artisct created please go to index page for the output`);
            let msgarea=document.querySelector('#message-area');
            message.appendChild(msgtxt);
            msgarea.appendChild(message);
           // window.location.replace('index.html');
        }
        else
        {
            let message=document.createElement('h2');
            let msgtxt=document.createTextNode('Error occured');
            let msgarea=document.querySelector('#message-area');
            message.appendChild(msgtxt);
            msgarea.appendChild(message);
        

        }
    }
    xhr.send(params);
}
let form=document.querySelector('#artist-form');
form.addEventListener('submit',createArtist);