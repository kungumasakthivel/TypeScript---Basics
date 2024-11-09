var Geometry;
(function (Geometry) {
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        Circle.prototype.getArea = function () {
            return Math.PI * this.radius * this.radius;
        };
        return Circle;
    }());
    Geometry.Circle = Circle;
    var Rectangle = /** @class */ (function () {
        function Rectangle(width, height) {
            this.width = width;
            this.height = height;
        }
        Rectangle.prototype.getArea = function () {
            return this.width * this.height;
        };
        return Rectangle;
    }());
    Geometry.Rectangle = Rectangle;
})(Geometry || (Geometry = {}));
var circle = new Geometry.Circle(5);
var rectangle = new Geometry.Rectangle(10, 5);
console.log(circle.getArea());
console.log(rectangle.getArea());
