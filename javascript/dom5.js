let movies=[
    {
        name:'django unchained',
        director:'quentin tarantino',
        industry:'hollywood'
    },
    {
        name:'Gangs of wasseypur',
        director:'Anurag kashyap',
        industry:'Bollywood'
    },
    {
        name:'Conjuring',
        director:'James',
        industry:'Hollywood'
    }
    
];
newmovie=()=>{
    let newmovie={};
    newmovie.name='Avatar';
    newmovie.director='Steven spielberg';
    newmovie.industry='Hollywood';
    movies.push(newmovie);
}

getmovies=()=>{
    movies.map(movie=>{
        let list=document.querySelector('#movie-list');
        let {name}=movie;
        let movieel=document.createElement('li');
        let movietext=document.createTextNode(name);
        movieel.appendChild(movietext);
        list.appendChild(movieel);
    });
}
getdirectors=()=>{
    movies.map(movie=>{
        let list=document.querySelector('#director-list');
        let {director}=movie;
        let direel=document.createElement('li');
        let dirname=document.createTextNode(director);
        direel.appendChild(dirname);
        list.appendChild(direel);

    });
}
getindustry=()=>{
    movies.forEach(movie=>{
        let list=document.querySelector('#industry-list');
        let {industry}=movie;
        let indel=document.createElement('li');
        let indname=document.createTextNode(industry);
        indel.appendChild(indname);
        list.appendChild(indel);

    });
}
newmovie();
getmovies();
getdirectors();
getindustry();