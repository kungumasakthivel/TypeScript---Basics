// define a base class
class Animal {
    constructor(public name: string) {}
}

// define the mixin
function CanFly<T extends new (...args: any[]) => {}>(Base: T) {
    return class extends Base {
        name: string;
        fly() {
            console.log(`${this.name} is flying`)
        }
    }
}

// applying mixin
class Bird extends CanFly(Animal) {}

const bird = new Bird("Eagle");
bird.fly();
console.log(bird.name);

