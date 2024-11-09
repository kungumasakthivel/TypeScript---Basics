interface Person {
    name: string;
    age: number;
    greet(): void;
}

// you must implement the mentioned variable and methods in interface
// moreover you can also implement extra methods and variable
class Student implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello ${this.name}, good morning!. Your age is ${this.age}`);
    }

    hap(): void {
        console.log('not in interface');
    }
}

let s = new Student('Joe', 23)
s.greet()
s.hap()