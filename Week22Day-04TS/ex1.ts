class Employee{
    private company:string;
    protected readonly empNo:number;
    public name:string;
    public location:string;
    public age:number;

    constructor(company:string,empNo:number,name:string,location:string,age:number)
    {
        this.company=company;
        this.empNo=empNo;
        this.name=name;
        this.location=location;
        this.age=age;
    }
}

class Developers extends Employee
{
    constructor(company:string,empNo:number,name:string,location:string,age:number)
    {
        super(company,empNo,name,location,age);
    }
    codings: string[];
    
    coding()
    {
        console.log("the employee "+this.empNo+" is "+this.name+" is coding");
    }
}


class Testing extends Employee
{
    constructor(company:string,empNo:number,name:string,location:string,age:number)
    {
        super(company,empNo,name,location,age);
    }
    
    testing()
    {
        console.log("the employee "+this.empNo+" is "+this.name+" is testing");
    }
}

var d1=new Developers("ABC",1,"saran","chennai",21);
var d2=new Developers("ABC",2,"Kodee","chennai",21);
var d3=new Developers("ABC",3,"Boopathi","chennai",21);
d1.codings=["c","c++","java","python"];
console.log(d1.coding);
d1.coding();
d2.coding();
d3.coding();

var t1=new Testing("ABC",4,"Kumar","chennai",21);
var t2=new Testing("ABC",5,"Tharun","chennai",21);
var t3=new Testing("ABC",6,"Raj","chennai",21);

t1.testing();
t2.testing();
t3.testing();