type Point = {
    x: number;
    y: number;
}

type LineSegment = {
    start: Point;
    end: Point;
}

type Cordinate = number;

function calLength(line: LineSegment): Cordinate {
    const dX = line.start.x - line.end.x;
    const dY = line.start.y - line.end.y;
    return Math.sqrt(dX * dX + dY * dY);
}

const p1: Point = {x: 0, y: 0};
const p2: Point = {x: 3, y: 4};

const lineSegment: LineSegment = {start: p1, end: p2}
const l = calLength(lineSegment)
console.log(l);