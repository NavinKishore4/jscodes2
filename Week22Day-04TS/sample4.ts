class Animal{
    public readonly name:string;
    public color:string;
    private age:number;
    protected food:string;

    constructor(name:string)
    {
        this.name=name;
    }
}

class DomesticAnimals extends Animal{
    constructor(name: string)
    {
        super(name);
    }
    printMyDetails()
    {
        console.log("My name : "+this.name);//public
        console.log("My Age : "+this.age);//private
        this.food="bone";
        console.log("My Food :" +this.food);//protected - child can access
    }
}

//object creation
var lion=new Animal("Lion");
lion.color="Golden";
console.log("Animal Name "+lion.name+" Animal Color "+lion.color);

var dog=new DomesticAnimals("DOG");
dog.color="Black";
dog.printMyDetails();
