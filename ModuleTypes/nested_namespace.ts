namespace Geometry {
  export namespace TwoD {
    export class Square {
      constructor(public side: number) {}

      getArea(): number {
        return this.side * this.side;
      }
    }
  }

  export namespace ThreeD {
    export class Cube {
      constructor(public side: number) {}

      getVolume(): number {
        return this.side * this.side * this.side;
      }
    }
  }
}

const square = new Geometry.TwoD.Square(4);
console.log("Square Area:", square.getArea()); // Output: Square Area: 16

const cube = new Geometry.ThreeD.Cube(3);
console.log("Cube Volume:", cube.getVolume()); // Output: Cube Volume: 27
