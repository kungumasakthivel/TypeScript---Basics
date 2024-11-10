function calLength(line) {
    var dX = line.start.x - line.end.x;
    var dY = line.start.y - line.end.y;
    return Math.sqrt(dX * dX + dY * dY);
}
var p1 = { x: 0, y: 0 };
var p2 = { x: 3, y: 4 };
var lineSegment = { start: p1, end: p2 };
var l = calLength(lineSegment);
console.log(l);
