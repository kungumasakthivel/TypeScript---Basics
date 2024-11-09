var Geometry;
(function (Geometry) {
    var TwoD;
    (function (TwoD) {
        var Square = /** @class */ (function () {
            function Square(side) {
                this.side = side;
            }
            Square.prototype.getArea = function () {
                return this.side * this.side;
            };
            return Square;
        }());
        TwoD.Square = Square;
    })(TwoD = Geometry.TwoD || (Geometry.TwoD = {}));
    var ThreeD;
    (function (ThreeD) {
        var Cube = /** @class */ (function () {
            function Cube(side) {
                this.side = side;
            }
            Cube.prototype.getVolume = function () {
                return this.side * this.side * this.side;
            };
            return Cube;
        }());
        ThreeD.Cube = Cube;
    })(ThreeD = Geometry.ThreeD || (Geometry.ThreeD = {}));
})(Geometry || (Geometry = {}));
var square = new Geometry.TwoD.Square(4);
console.log("Square Area:", square.getArea()); // Output: Square Area: 16
var cube = new Geometry.ThreeD.Cube(3);
console.log("Cube Volume:", cube.getVolume()); // Output: Cube Volume: 27
