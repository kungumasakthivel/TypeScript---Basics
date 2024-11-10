// nullish coalescing operator "??" is a logical operator
// x ?? y return y if x is null or undefined
// x ?? y return x if x is not null or undefined
//    even if y is not null or undefined  
var x = null;
var y = 22;
var r = x !== null && x !== void 0 ? x : y;
console.log(r);
