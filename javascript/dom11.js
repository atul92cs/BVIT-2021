loaddirector=()=>{
    let url='http://localhost:8080/director/get/';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onreadystatechange=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log(xhr.responseText);
            let table=document.querySelector('#table-data');
            let response=JSON.parse(xhr.responseText);
            let {director}=response;
            director.map(dir=>{
                let{id,name}=dir;
                let tablerow=document.createElement('tr');
                let tableid=document.createElement('td');
                let dirid=document.createTextNode(id);
                tableid.appendChild(dirid);
                let tablename=document.createElement('tad');
                let dirname=document.createTextNode(name);
                tablename.appendChild(dirname);
                tablerow.appendChild(tableid);
                tablerow.appendChild(tablename);
                table.appendChild(tablerow);
            });
        }
        else
        {
            console.log('error occured')
        }
       
    }
    xhr.send();
}
loaddirector();