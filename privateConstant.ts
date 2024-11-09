interface Const {
    privateConst(): void
}

class My implements Const {
    private readonly pi: number = 3.14;

    privateConst() {
        console.log(this.pi);
    }
}

let c = new My();
c.privateConst();