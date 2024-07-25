var Rectangle = /** @class */ (function () {
    function Rectangle(w, h, l) {
        this.w = w;
        this.h = h;
        this.l = l;
    }
    Rectangle.prototype.getArea = function () {
        return (this.w * this.h);
    };
    Rectangle.prototype.getVolume = function () {
        return (this.w * this.h);
    };
    return Rectangle;
}());
var r1 = new Rectangle(10, 20, 5);
console.log(r1.getArea());
console.log(r1.getVolume());
