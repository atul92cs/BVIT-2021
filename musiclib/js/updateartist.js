getArtist=()=>
{
    let url='http://localhost/musiclib/getartist.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            let response=JSON.parse(xhr.responseText);
            let {artist}=response;
            let tablesec=document.querySelector('#table-data-section');
            let table=document.createElement('table');
            let tablehead=document.createElement('tr');
            let idth=document.createElement('th');
            let nameth=document.createElement('th');
            let genreth=document.createElement('th');
            let actionth=document.createElement('th');
            let idcon=document.createTextNode('id');
            let namecon=document.createTextNode('name');
            let genrecon=document.createTextNode('genre');
            let actioncon=document.createTextNode('action');
            idth.appendChild(idcon);
            nameth.appendChild(namecon);
            genreth.appendChild(genrecon);
            actionth.appendChild(actioncon);
            tablehead.appendChild(idth);
            tablehead.appendChild(nameth);
            tablehead.appendChild(genreth);
            tablehead.appendChild(actionth)
            table.appendChild(tablehead);
            tablesec.appendChild(table);
            //console.log(response);
            artist.forEach(ar=>{
              
             let trow=document.createElement('tr');
             let id=document.createElement('td');
             let name=document.createElement('td');
             let genre=document.createElement('td');
             let idcon=document.createTextNode(ar.id);
             let namecon=document.createTextNode(ar.name);
             let genrecon=document.createTextNode(ar.genre);
             let updatebtn=document.createElement('button');
             let updatebtntxt=document.createTextNode('Edit');
             updatebtn.appendChild(updatebtntxt);
            updatebtn.addEventListener('click',(e)=>{
                e.preventDefault();
                let {id,gid,name,genre}=ar;
                let idtxt=document.querySelector('#id');
                let nametxt=document.querySelector('#name');
                let genretxt=document.querySelector('#genre');
                //console.log(genre);
                  idtxt.value=id;
                  nametxt.value=name;
                  genretxt.value=gid;
                
            });
             id.appendChild(idcon);
             name.appendChild(namecon);
             genre.appendChild(genrecon);
             trow.appendChild(id);
             trow.appendChild(name);
             trow.appendChild(genre);
             trow.appendChild(updatebtn);
             table.appendChild(trow);
            });
        }
        else
        {
            console.log('error occured');
        }
    }
    xhr.send();
}
getArtist();
let upform=document.querySelector('#update-artist-form');
upform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name=document.querySelector('#name').value;
    let genre=document.querySelector('#genre').value;
    let id=document.querySelector('#id').value;
    let data={
        name:name,
        genre:genre,
        id:id
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    let url='http://localhost/musiclib/updateartist.php';
    
    xhr.open('PUT',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
            let message=document.querySelector('#message-section');
            let messageh=document.createElement('h2');
            let messagetxt=document.createTextNode('Artist updated');
            messageh.appendChild(messagetxt);
            message.appendChild(messageh);
            location.reload();
        }
        else
        {
            let message=document.querySelector('#message-section');
            let messageh=document.createElement('h2');
            let messagetxt=document.createTextNode('Error occured');
            messageh.appendChild(messagetxt);
            message.appendChild(messageh);
        
        }
    }
    xhr.send(params);
});
