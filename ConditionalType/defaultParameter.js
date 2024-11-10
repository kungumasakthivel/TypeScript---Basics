function greet(name, msg) {
    if (msg === void 0) { msg = "Hello"; }
    return "".concat(msg, ", ").concat(name);
}
console.log(greet("Joe"));
console.log(greet("Joe", "Goodbye"));
