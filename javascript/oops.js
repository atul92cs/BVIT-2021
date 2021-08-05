//es5 syntax constructor

function hero(name,realname,team)
{
    this.name=name;
    this.realname=realname;
    this.team=team;
}
hero.prototype.getTeam=function()
{
    return this.team;
}
let hero1=new hero('Batman','Bruce wayne','Justice league');
let hero2=new hero('Superman','Kal-el','Justice league');
let hero3=new hero('Spiderman','Peter parker','Avengers');
console.log(hero3.getTeam());
console.log(hero1);

//es6 method 

class fbclub{
    constructor(name,country,league)
    {
        this.name=name;
        this.country=country;
        this.league=league;
    }
    getClubname()
    {
        return this.name;
    }
    getCountry()
    {
        return this.country;
    }
}
let fcb=new fbclub('Barcelona','Spain','La Liga');
let rm=new fbclub('Real madrid','Spain','La Liga');
let mu=new fbclub('Manchaster United','England','English premier league');
console.log(fcb.getCountry());
console.log(mu.getClubname());