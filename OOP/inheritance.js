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
var Parent = /** @class */ (function () {
    function Parent() {
        this.surname = "Sofie";
    }
    Parent.prototype.familyName = function () {
        return this.surname;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Child.prototype.childFullName = function () {
        var surname = this.familyName();
        return "".concat(this.name, " ").concat(surname);
    };
    return Child;
}(Parent));
var p = new Child('Joo');
var x = p.childFullName();
console.log(x);
