let mainbody=document.querySelector('#main-body');
getbilke=()=>{
    
    let body=document.querySelector('#main-body');
    let url='http://localhost/bikebrowser/';
    let api='http://localhost/bikebrowser/getbike.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',api,true);
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
            let response=JSON.parse(xhr.responseText);
            let {bike}=response;
            console.log(xhr.responseText);
            bike.forEach(bk => {
            let bikediv=document.createElement('div');
            let {id,name,company,picture}=bk;
            let bikehead=document.createElement('h2');
            let bktxt=document.createTextNode(name);
            let bikeid=document.createElement('p');
            let bkid=document.createTextNode(id);
            let bikecomp=document.createElement('h4');
            let bikecomptxt=document.createTextNode(company);
            let bikepic=document.createElement('img');
            bikepic.src=`${url}/${picture}`;
            bikehead.appendChild(bktxt);
            bikecomp.appendChild(bikecomptxt);
            bikeid.appendChild(bkid);
            bikediv.appendChild(bikehead);
            bikediv.appendChild(bikecomp);
            bikediv.appendChild(bikeid);
            bikediv.appendChild(bikepic);
            body.appendChild(bikediv);
            });
        }
        else
        {
            console.log('error occured');
        }
    }
    xhr.send();
};
getbilke();