var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.writeExam = function () {
        console.log(this.name + " is writing the exam");
    };
    Student.prototype.playGames = function () {
        console.log(this.name + " is playing games");
    };
    return Student;
}());
var s1 = new Student("saran", 20);
s1.writeExam();
s1.playGames();
console.log(s1.name);
console.log(s1.age);
