// rest parameter allows to capture more no. of parameters than declared
// rest parameter should be placed at end of the function signature
// only one rest parameter is allowed per function
// rest parameter type should be type[] array
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(num1, num2) {
    var nums = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        nums[_i - 2] = arguments[_i];
    }
    var sum = num1 + num2;
    var num;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        num = nums_1[_a];
        sum += num;
    }
    return sum;
}
var arr = [1, 2, 3, 4, 5];
console.log(add.apply(void 0, __spreadArray([2, 3], arr, false)));
// type assertions "as" keyword
// if you declare variables as unknow you can't use any method, even value is string
// only when you type assertions done using "as" keyword
// then only that variable will have string's methods and behaviour
// eg:
// In this example, someValue has an unknown type, 
// which means the type of the value is unknown during development 
// but can be any type during runtime. We use the as syntax to cast
// someValue to a string and then access the length property.
var someValue = "Hello";
var strLength = someValue.length;
console.log(strLength);
console.log(function () { return console.log("Hello"); });
