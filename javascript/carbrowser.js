getCars=()=>{
    let url='https://bluecollarsclientwork.000webhostapp.com/carbrowser/getcars.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    
    xhr.onload=()=>{
      if(xhr.readyState==4 && xhr.status==200)
      {
        let response=JSON.parse(xhr.responseText);
        let{car}=response;
        car.forEach(cr=>{
            let {id,name,company,status}=cr;
            let body=document.querySelector('.main-body');
            let cardiv=document.createElement('div');
            cardiv.classList.add('car-div');
            let namehead=document.createElement('h4');
            let namevl=document.createTextNode(name);
            namehead.appendChild(namevl);
            cardiv.appendChild(namehead);
            body.appendChild(cardiv);
        });
      }
      else
      {
         console.log('error occured'+xhr.status);
      }
    }
    xhr.send();
}
getCars();