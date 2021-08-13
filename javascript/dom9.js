let movies= [
    {
        "id": 1,
        "name": "Dark Knight Rises",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628190287/plufqfffldzrmilcyqin.jpg",
        "genre": "Action",
        "director": "Steven Spielberg"
    },
    {
        "id": 2,
        "name": "Transformers",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628190356/wwvis1pdzkk98tkrsy00.jpg",
        "genre": "Action",
        "director": "Michael Bay"
    },
    {
        "id": 3,
        "name": "Fast and Furious 9",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628190491/fqa2dstapsrtfphicszi.jpg",
        "genre": "Action",
        "director": "Justin Lin "
    },
    {
        "id": 4,
        "name": "Avatar",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628190690/ihuc4qb48gz1oo5jmx9q.jpg",
        "genre": "Action",
        "director": "James Cameron"
    },
    {
        "id": 5,
        "name": "Conjuring",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628193358/itkaaumaqtpukqx4kkvm.jpg",
        "genre": "Horror",
        "director": " James Wan"
    },
    {
        "id": 6,
        "name": "Fear Street 1994",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628193599/cvwjsicb7r1hb2gihntq.jpg",
        "genre": "Horror",
        "director": "Leigh Janiak"
    },
    {
        "id": 7,
        "name": "Annabelle",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628193895/hj8pmqvfemwinvk31o74.jpg",
        "genre": "Horror",
        "director": "John R. Leonetti"
    },
    {
        "id": 8,
        "name": "Rings",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628194162/tospxnjip2v6ojf1ni0x.jpg",
        "genre": "Horror",
        "director": "Gore Verbinski"
    },
    {
        "id": 9,
        "name": "Evil Dead",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628195269/xdrdbbhn7j1z6ruag2yh.webp",
        "genre": "Horror",
        "director": "Fede Álvarez"
    },
    {
        "id": 10,
        "name": "Shutter Island",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628196486/wghcnwdbilqxybtcrnjt.jpg",
        "genre": "Thriller",
        "director": "Martin Scorsese"
    },
    {
        "id": 11,
        "name": "Don't Breathe",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628196795/kziv3a3mmvft3fh94ilh.png",
        "genre": "Thriller",
        "director": "Fede Álvarez"
    },
    {
        "id": 12,
        "name": "Night Crawler",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628197393/bulnrnwmjclapyhwrtps.jpg",
        "genre": "Thriller",
        "director": "Dan Gilroy"
    },
    {
        "id": 13,
        "name": "The Prestige",
        "picture": "https://res.cloudinary.com/dkhk4gyey/image/upload/v1628197576/m7g5hyncv3cmn1mh3ua1.jpg",
        "genre": "Thriller",
        "director": "Christopher Nolan"
    }
];
/*getMovies=()=>{
    const url='https://localhost:8080/movies/';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true); 
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
            //console.log(xhr.responseText);
           let response=JSON.parse(xhr.responseText);
           let {movies}=response;
           movies.forEach(movie=>{
            let {name,director,genre,picture}=movie;
        let moviediv=document.createElement('div');
        moviediv.classList.add('movie-div');
        let nametitle=document.createElement('h2');
        nametitle.classList.add('movie-title');
        let namevl=document.createTextNode(name);
        nametitle.appendChild(namevl);
        let directortitle=document.createElement('h4');
        directortitle.classList.add('director');
        let dirvl=document.createTextNode(director);
        directortitle.appendChild(dirvl);
        let genretitle=document.createElement('p');
        genretitle.classList.add('genre');
        let genrevl=document.createTextNode(genre);
        genretitle.appendChild(genrevl);
        let moviepic=document.createElement('img');
        moviepic.classList.add('movie-poster');
        moviepic.src=picture;
        let body=document.querySelector('.main-body');
        moviediv.appendChild(moviepic);
        moviediv.appendChild(nametitle);
        moviediv.appendChild(directortitle);
        moviediv.appendChild(genretitle);
        body.appendChild(moviediv);
        });
           
        }  
        else
        {
             console.error('error occured')
        }  
    
      
    }
    xhr.send();
}
getMovies();*/

getMovies=()=>{
    movies.map(movie=>{
        let {name,director,genre}=movie;
    let moviediv=document.createElement('div');
    moviediv.classList.add('movie-div');
    let nametitle=document.createElement('h2');
    nametitle.classList.add('movie-title');
    let namevl=document.createTextNode(name);
    nametitle.appendChild(namevl);
    let directortitle=document.createElement('h4');
    directortitle.classList.add('director');
    let dirvl=document.createTextNode(director);
    directortitle.appendChild(dirvl);
    let genretitle=document.createElement('p');
    genretitle.classList.add('genre');
    let genrevl=document.createTextNode(genre);
    genretitle.appendChild(genrevl);
    let body=document.querySelector('.main-body');
    moviediv.appendChild(nametitle);
    moviediv.appendChild(directortitle);
    moviediv.appendChild(genretitle);
    body.appendChild(moviediv);
    });
}
    getMovies();