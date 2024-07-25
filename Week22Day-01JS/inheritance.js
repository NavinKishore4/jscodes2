class Car{
    constructor(brand){
        this.brand = brand;
    }
    myDetails(){
        console.log("My brand is : " + this.brand);
    }
}

class Model extends Car{
    constructor(brand , name){
        super(brand);
        this.name = name;
    }
    showDetails(){
        console.log("My model name is : " + this.name);
    }
}

var myCar = new Model("Tata", "Altroz");
myCar.showDetails();
myCar.myDetails();//inheritance = Model Class is inheriting the function from parent class "Car"
console.log(myCar.name);
console.log(myCar.brand);//inheritance