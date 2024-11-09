// abstract class serve as base class
// cannot instantiated directly
// often imclude unimplemented methods and properties

abstract class Address {
    private street: string;
    private city: string;
    private zipcode: number;

    constructor(street: string, city: string, zipcode: number) {
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
    }

    public getFullAddress(): string {
        return `${this.street}, ${this.city}, ${this.zipcode}.`
    }
}

class FirstCustomer extends Address {
    constructor(street: string, city: string, zipcode: number) {
        super(street, city, zipcode);
    }
}

let a = new FirstCustomer("main road", "delhi", 100233)
console.log(a.getFullAddress())
let b = new FirstCustomer("side road", "agra", 100111)
console.log(b.getFullAddress())