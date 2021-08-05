startup=(msg)=>{
    let heading=document.getElementsByClassName('heading');
    console.log(heading[0]);
    heading[0].innerHTML=msg;
}
startup('Welcome');
let smsg='To Dom Tutorial';
let heading2=document.getElementsByClassName('heading');
heading2[1].innerHTML=smsg;