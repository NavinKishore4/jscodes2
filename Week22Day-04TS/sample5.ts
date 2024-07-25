class AutoMobile{
    
    wheels: number;
    color: string;
    
    constructor(wheels:number,color:string)
    {
        this.wheels=wheels;
        this.color=color;
    }

    movingForward()
    {
        console.log("The car is moving forward >>>>>");
    }
    movingBackward()
    {
        console.log("The car is moving backward <<<<<");
    }
}

class Car extends AutoMobile{
    model:string;
    constructor(wheels:number,color:string,model:string)
    {
        super(wheels,color);
        this.model=model;
    }

    startEngine()
    {
        console.log("car is starting");
    }

    stopEngine()
    {
        console.log("car is stopping");
    }
    //method overridding
    movingBackward() {
        console.log("The car is moving backward child");
    }
}

var c1=new Car(1,"red","suv");
c1.startEngine();
c1.movingForward();
c1.movingBackward();
c1.stopEngine();