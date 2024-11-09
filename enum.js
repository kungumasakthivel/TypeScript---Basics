var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
var myColor = Color.Red;
console.log(myColor);
function whatColor(color) {
    console.log(color);
}
whatColor(myColor);
