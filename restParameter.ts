// rest parameter allows to capture more no. of parameters than declared
// rest parameter should be placed at end of the function signature
// only one rest parameter is allowed per function
// rest parameter type should be type[] array

function add(num1: number, num2: number, ...nums: number[]): number {
    let sum: number = num1 + num2;
    let num: number;
    for(num of nums) {
        sum += num;
    }
    return sum
}

let arr: number[] = [1, 2, 3, 4, 5];
console.log(add(2, 3, ...arr));


// type assertions "as" keyword
// if you declare variables as unknow you can't use any method, even value is string
// only when you type assertions done using "as" keyword
// then only that variable will have string's methods and behaviour
// eg:
// In this example, someValue has an unknown type, 
// which means the type of the value is unknown during development 
// but can be any type during runtime. We use the as syntax to cast
// someValue to a string and then access the length property.
let someValue: unknown = "Hello";
let strLength: number = (someValue as string).length
console.log(strLength)

let sv: unknown = "Hello"
let sl: number = (<string> sv).length
console.log(sl)

// anonymous function 
console.log(() => ("Hello"))
