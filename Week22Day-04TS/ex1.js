var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(company, empNo, name, location, age) {
        this.company = company;
        this.empNo = empNo;
        this.name = name;
        this.location = location;
        this.age = age;
    }
    return Employee;
}());
var Developers = /** @class */ (function (_super) {
    __extends(Developers, _super);
    function Developers(company, empNo, name, location, age) {
        return _super.call(this, company, empNo, name, location, age) || this;
    }
    Developers.prototype.coding = function () {
        console.log("the employee " + this.empNo + " is " + this.name + " is coding");
    };
    return Developers;
}(Employee));
var Testing = /** @class */ (function (_super) {
    __extends(Testing, _super);
    function Testing(company, empNo, name, location, age) {
        return _super.call(this, company, empNo, name, location, age) || this;
    }
    Testing.prototype.testing = function () {
        console.log("the employee " + this.empNo + " is " + this.name + " is testing");
    };
    return Testing;
}(Employee));
var d1 = new Developers("ABC", 1, "saran", "chennai", 21);
var d2 = new Developers("ABC", 2, "Kodee", "chennai", 21);
var d3 = new Developers("ABC", 3, "Boopathi", "chennai", 21);
d1.codings = ["c", "c++", "java", "python"];
console.log(d1.coding);
d1.coding();
d2.coding();
d3.coding();
var t1 = new Testing("ABC", 4, "Kumar", "chennai", 21);
var t2 = new Testing("ABC", 5, "Tharun", "chennai", 21);
var t3 = new Testing("ABC", 6, "Raj", "chennai", 21);
t1.testing();
t2.testing();
t3.testing();
