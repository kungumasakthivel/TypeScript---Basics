// abstract class serve as base class
// cannot instantiated directly
// often imclude unimplemented methods and properties
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
var Address = /** @class */ (function () {
    function Address(street, city, zipcode) {
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
    }
    Address.prototype.getFullAddress = function () {
        return "".concat(this.street, ", ").concat(this.city, ", ").concat(this.zipcode, ".");
    };
    return Address;
}());
var FirstCustomer = /** @class */ (function (_super) {
    __extends(FirstCustomer, _super);
    function FirstCustomer(street, city, zipcode) {
        return _super.call(this, street, city, zipcode) || this;
    }
    return FirstCustomer;
}(Address));
var a = new FirstCustomer("main road", "delhi", 100233);
console.log(a.getFullAddress());
var b = new FirstCustomer("side road", "agra", 100111);
console.log(b.getFullAddress());
