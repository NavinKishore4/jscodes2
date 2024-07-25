class Student{
    name: string;
   private age: number;

    constructor(name:string,age:number)
    {
        this.name=name;
        this.age=age;
    }

    public writeExam()
    {
        console.log(this.name + " is writing the exam");
    }
    private playGames()
    {
        console.log(this.name +" is playing games");
    }

}

var s1=new Student("saran",20);
s1.writeExam();
s1.playGames();

console.log(s1.name);
console.log(s1.age);