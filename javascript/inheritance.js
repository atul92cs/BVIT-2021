class director
{
    constructor(dirname,country,industry)
    {
        this.dirname=dirname;
        this.country=country;
        this.industry=industry;
    }
    getdirector()
    {
        return this.dirname;
    }
}

class movie extends director
{
    constructor(name,dirname,country,industry,year,language)
    {
        super(dirname,country,industry);
        this.year=year;
        this.name=name;
        this.language=language;

    }
    getMovie()
    {
        return this.name;
    }
   
    
}
 let movie1=new movie('The dark knight','christopher nolan','USA','Hollywood',2008,'english');
 console.log(movie1.getdirector());
 