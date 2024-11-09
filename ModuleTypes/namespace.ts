namespace Geometry {
    export class Circle {
        constructor(public radius: number) {}

        getArea(): number{
            return Math.PI * this.radius * this.radius;
        }
    }

    export class Rectangle {
        constructor(public width: number, public height: number) {}

        getArea(): number{
            return this.width * this.height;
        }
    }
}

const circle = new Geometry.Circle(5);
const rectangle = new Geometry.Rectangle(10, 5);
console.log(circle.getArea())
console.log(rectangle.getArea())