class car
{
    constructor(model,fuel)
    {
        this.model=model;
        this.fuel=fuel;
    }

    moveCar()
    {
        console.log("Car is moving");
    }
}

var c1=new car("Suv","Electric");
c1.moveCar();