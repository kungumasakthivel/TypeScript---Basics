// you must implement the mentioned variable and methods in interface
// moreover you can also implement extra methods and variable
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.greet = function () {
        console.log("Hello ".concat(this.name, ", good morning!. Your age is ").concat(this.age));
    };
    Student.prototype.hap = function () {
        console.log('not in interface');
    };
    return Student;
}());
var s = new Student('Joe', 23);
s.greet();
s.hap();
