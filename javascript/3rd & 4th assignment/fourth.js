let cars=[];
class company{
    constructor(name,origin,found)
    {
        this.name=name;
        this.origin=origin;
        this.found=found;
    }

}
class car extends company{
    constructor(carname,release,status,name,origin,found)
    {
        super(name,origin,found);
        this.carname=carname;
        this.release=release;
        this.status=status;
    }
}
insertcar=(car)=>{
    cars.push(car);
}
displaycars=()=>{
    cars.map(car=>{
        console.log(car.carname);
    });
}

let car1=new car('wagonar','2010','active','maruti','India',1980);
let car2=new car('Swift','2010','active','maruti','India',1980);
insertcar(car1);
insertcar(car2);
displaycars();