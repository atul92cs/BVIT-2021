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
        artist.forEach(ar=>{
            let artilabel=document.createElement('h2');
            let artiname=document.createTextNode(ar.name);
            let genlabel=document.createElement('p');
            let genname=document.createTextNode(ar.genre);
            artilabel.appendChild(artiname);
            genlabel.appendChild(genname);
            artistbody.appendChild(artilabel);
            artistbody.appendChild(genlabel);
        });
        }
        
    }
    xhr.send();
}
getArtist();