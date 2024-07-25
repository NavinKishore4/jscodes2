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
var AutoMobile = /** @class */ (function () {
    function AutoMobile(wheels, color) {
        this.wheels = wheels;
        this.color = color;
    }
    AutoMobile.prototype.movingForward = function () {
        console.log("The car is moving forward >>>>>");
    };
    AutoMobile.prototype.movingBackward = function () {
        console.log("The car is moving backward <<<<<");
    };
    return AutoMobile;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, color, model) {
        var _this = _super.call(this, wheels, color) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.startEngine = function () {
        console.log("car is starting");
    };
    Car.prototype.stopEngine = function () {
        console.log("car is stopping");
    };
    Car.prototype.movingBackward = function () {
        console.log("The car is moving backward child");
    };
    return Car;
}(AutoMobile));
var c1 = new Car(1, "red", "suv");
c1.startEngine();
c1.movingForward();
c1.movingBackward();
c1.stopEngine();
