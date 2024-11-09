// TS provides access modifiers (public, private, protected)
// to control the visibility and accessibility of class properties and methods
// ensuring only intended parts of class are exposed
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.getFullName = function () {
        return "".concat(this.name, " ").concat(this.surname);
    };
    Customer.prototype.setFullName = function (name, surname) {
        this.name = name;
        this.surname = surname;
    };
    return Customer;
}());
var SetGetCustomer = /** @class */ (function () {
    function SetGetCustomer() {
        var name = "jon";
        var surname = "qui";
        var customer = new Customer();
        customer.setFullName(name, surname);
        console.log(customer.getFullName());
        customer.setFullName("xxx", "tentanation");
        console.log(customer.getFullName());
    }
    return SetGetCustomer;
}());
new SetGetCustomer();
