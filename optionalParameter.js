function greet(name, age) {
    return age ? "Hello ".concat(name, ", your age is ").concat(age) : "Hello ".concat(name);
}
console.log(greet("abdul"));
console.log(greet("abdul", 27));
