class Student {
    constructor(rollno, name) {
        this.rollno = rollno;
        this.name = name;
    }

    printIdCard() {
        console.log("Roll no: " + this.rollno + " --- Name: " + this.name);
    }
}

var s1 = new Map([
    ["1", "Navin"],
    ["2", "Saran"],
    ["3", "Kodee"]
]);

// Create instances of Student class for each key-value pair in the Map
s1.forEach((value, key) => {
    var student = new Student(key, value);
    student.printIdCard();
});
