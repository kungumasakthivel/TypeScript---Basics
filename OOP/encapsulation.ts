// TS provides access modifiers (public, private, protected)
// to control the visibility and accessibility of class properties and methods
// ensuring only intended parts of class are exposed

class Customer {
    private name: string;
    private surname: string;

    public getFullName(): string {
        return `${this.name} ${this.surname}`;
    }

    public setFullName(name: string, surname: string): void {
        this.name = name;
        this.surname = surname;
    }
}

class SetGetCustomer {
    constructor() {
        const name: string = "jon"
        const surname: string = "qui"
        const customer: Customer = new Customer();
        customer.setFullName(name, surname);
        console.log(customer.getFullName());
        customer.setFullName("xxx", "tentanation");
        console.log(customer.getFullName());
    }
}

new SetGetCustomer()