class Animal {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    move(distance: number) {
        console.log(`${this.name} is moved ${distance} meter`);
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`WOOF ${this.name} is a ${this.breed}`)
    }
}

let dog = new Dog("Rex", "Golden Retriever")
dog.bark()
dog.move(10)