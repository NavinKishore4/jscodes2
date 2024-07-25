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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var DomesticAnimals = /** @class */ (function (_super) {
    __extends(DomesticAnimals, _super);
    function DomesticAnimals(name) {
        return _super.call(this, name) || this;
    }
    DomesticAnimals.prototype.printMyDetails = function () {
        console.log("My name : " + this.name); //public
        console.log("My Age : " + this.age); //private
        this.food = "bone";
        console.log("My Food :" + this.food); //protected - child can access
    };
    return DomesticAnimals;
}(Animal));
//object creation
var lion = new Animal("Lion");
lion.color = "Golden";
console.log("Animal Name " + lion.name + " Animal Color " + lion.color);
var dog = new DomesticAnimals("DOG");
dog.color = "Black";
dog.printMyDetails();
