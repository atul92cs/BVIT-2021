let url='https://bluecollarsclientwork.000webhostapp.com/seriesbrowser/createcharacter.php';
let form=document.querySelector('#submit-button');
form.addEventListener('click',(e)=>{
    e.preventDefault();
    let name=document.querySelector('#name');
    let series=document.querySelector('#series');
  //  let phone=document.querySelector('#phone');
    let data={
        "name":name.value,
        "series":series.value
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
            console.log('Character created')

        }
        else
        {
            console.log('error occured');
        }
    }
    xhr.send(params);
});