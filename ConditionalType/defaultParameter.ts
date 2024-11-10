function greet(name: string, msg: string = "Hello"): string {
    return `${msg}, ${name}`;
}

console.log(greet("Joe"));
console.log(greet("Joe", "Goodbye"));