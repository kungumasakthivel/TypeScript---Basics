function greet(name: string, age?: number): string {
    return age ? `Hello ${name}, your age is ${age}` : `Hello ${name}`;
}

console.log(greet("abdul"))
console.log(greet("abdul", 27))