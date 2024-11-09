class Parent {
    private surname: string = "Sofie";
    public familyName(): string {
        return this.surname;
    }
}

class Child extends Parent {
    private name: string;
    constructor(name: string) {
        super();
        this.name = name;
    }

    public childFullName(): string {
        const surname: string = this.familyName();
        return `${this.name} ${surname}`;
    }
}

let p = new Child('Joo')
let x = p.childFullName()
console.log(x)
