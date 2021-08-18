getArtist=()=>{
    let url='http://localhost/musiclib/getartist.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
        let artistbody=document.querySelector('.artist-section');
        let response=JSON.parse(xhr.responseText);
        let {artist}=response;
        //console.log(xhr.responseText);
        artist.map(ar=>{
            let artilabel=document.createElement('h2');
            let artiname=document.createTextNode(ar.name);
            let genlabel=document.createElement('p');
            let genname=document.createTextNode(ar.genre);
            let deletebtn=document.createElement('button');
            let deletebtntxt=document.createTextNode('delete');
            deletebtn.appendChild(deletebtntxt);
            artilabel.appendChild(artiname);
            genlabel.appendChild(genname);
            artistbody.appendChild(artilabel);
            artistbody.appendChild(genlabel);
            artistbody.appendChild(deletebtn);
            let url2='http://localhost/musiclib/deleteartist.php';
            deletebtn.addEventListener('click',(e)=>{
                e.preventDefault();
                let id=ar.id;
                let data={
                    "id":id
                };
                let params=JSON.stringify(data);
                let xhr=new XMLHttpRequest();
                xhr.open('DELETE',url2,true);
                xhr.onload=()=>{
                    if(xhr.status==200||xhr.readyState==4)
                    {
                        console.log('Artist deleted');
                    }
                    else
                    {
                        console.log('Error occured');
                    }
                }
                xhr.send(params);
            });
        });
        }
        
    }
    xhr.send();
}
getArtist();