// union types any one of several types
// value can be any type include in union string | number | bool
// can access members common to all types in union

type Input = string | number 

function display(value: Input): Input {
    return value
}

console.log(display('string'))
console.log(display(34))
// console.log(display(true)) // this raises an error bcz of diff type


// intersection type (A & B) can combines multiple types into one
// value must have properties and behavior consistent with all types
// value of intersection type must satisfy all types combined

type Named = {name: string}
type Aged = {age: number}

type Person = Named & Aged;

function printPerson(person: Person): void {
    console.log(`${person.name}, ${person.age}`)
}

const p: Person = {name: 'John', age: 31}
printPerson(p)