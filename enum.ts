enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE'
}

const myColor: Color = Color.Red;
console.log(myColor);

function whatColor(color: Color): void {
    console.log(color);
}

whatColor(myColor)