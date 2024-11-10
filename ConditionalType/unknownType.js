// unknow type is any value but require type-checking before performing
// here value's type is not predetermined
// still want to enforce type-checking before using it
// useful when dealing with external libraries or api
// where exact type of value can't be determined
function unknowTypeParam(input) {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else {
        throw new Error('given input is not a string');
    }
}
console.log(unknowTypeParam('String'));
// console.log(unknowTypeParam(9)) // if input value is not string then raise error
