// nullish coalescing operator "??" is a logical operator
// x ?? y return y if x is null or undefined
// x ?? y return x if x is not null or undefined
//    even if y is not null or undefined  
// y value is assigned to variable only if x is null or undefined

const x: number | null = null;
const y: number = 22;

const r = x ?? y;
console.log(r);