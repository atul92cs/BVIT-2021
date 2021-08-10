let movies=[];
createmovie=(name,release,genre,director)=>{
    let movie={};
    movie.name=name;
    movie.release=release;
    movie.genre=genre;
    movie.director=director;
    movies.push(movie);
}

showmovies=()=>{
    movies.map(movie=>{
        console.log(movie);
    });
}
createmovie("Avengers infinity war",2018,"action","Joe russo");
createmovie("Avengers endgame",2019,"action","Joe russo");
showmovies();