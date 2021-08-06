movielist=document.querySelectorAll('.movie-list-item');
console.log(movielist);
let oddmovie=document.querySelectorAll('.movie-list-item:nth-child(odd)');
let evenmovie=document.querySelectorAll('.movie-list-item:nth-child(even)');
oddmovie.forEach(omovie=>{
    omovie.style.backgroundColor='red';
    omovie.style.color='white';
    omovie.style.marginBottom='2vh';
});
evenmovie.forEach(emovie=>{
    emovie.style.backgroundColor='blue';
    emovie.style.color='white';
    emovie.style.marginBottom='2vh';
});