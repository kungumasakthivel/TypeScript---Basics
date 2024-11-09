// polymorphism is overrideing the method 
// if parent class has same method name
// child class will override the method and behave its functionality

class Polymorphism {
    complaining(): void {
        console.log('complaining');
    }
}

class Override extends Polymorphism {
    complaining(): void {
        console.log('override');
    }
    public main(): void {
        this.complaining();
    }
}

let override = new Override();
override.complaining();
override.main();