// polymorphism is overrideing the method 
// if parent class has same method name
// child class will override the method and behave its functionality
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
var Polymorphism = /** @class */ (function () {
    function Polymorphism() {
    }
    Polymorphism.prototype.complaining = function () {
        console.log('complaining');
    };
    return Polymorphism;
}());
var Override = /** @class */ (function (_super) {
    __extends(Override, _super);
    function Override() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Override.prototype.complaining = function () {
        console.log('override');
    };
    Override.prototype.main = function () {
        this.complaining();
    };
    return Override;
}(Polymorphism));
var override = new Override();
override.complaining();
override.main();
