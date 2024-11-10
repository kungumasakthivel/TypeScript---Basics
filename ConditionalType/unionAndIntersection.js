// union types any one of several types
// value can be any type include in union string | number | bool
// can access members common to all types in union
function display(value) {
    return value;
}
console.log(display('string'));
console.log(display(34));
function printPerson(person) {
    console.log("".concat(person.name, ", ").concat(person.age));
}
var p = { name: 'John', age: 31 };
printPerson(p);
