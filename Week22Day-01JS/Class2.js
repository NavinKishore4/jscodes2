class car
{
    name;
    fuelType
    
    moveCar()
    {
        console.log("Car is moving"+" "+this.fuelType);
    }

    set fuelType(temp)
    {
        this.fuelType=temp;
    }
    get fuelType()
    {
        return this.fuelType;
    }
}

var c1=new car();
c1.fuelType="Gas";
c1.moveCar();
console.log(c1.fuelType);