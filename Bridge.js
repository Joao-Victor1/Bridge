//Interface de Cores:
class Color
{
    constructor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }
}

//Implementação Concretas de Cores:
class RedColor extends Color
{
    constructor(){
        super("Vermelho");
    }
}

class GreenColor extends Color
{
    constructor(){
        super("Verde");
    }
}

class BlueColor extends Color
{
    constructor(){
        super("Azul");
    }
}

class BlackColor extends Color
{
    constructor(){
        super("Preto");
    }
}

//Implementação de Formas:
class Shape
{
    constructor(color){
        this.color = color;
    }

    setColor(color){
        this.color = color;
    }

    draw(){
        throw new Error("Este método precisa ser implementado pela subclasse");
    }
}



//Abstrações Refinadas:
class CircleShape extends Shape
{
    draw(){
        console.log(`Desenhando um círculo ${this.color.getColor()}.`);
    }
}

class SquareShape extends Shape
{
    draw(){
        console.log(`Desenhando um quadrado ${this.color.getColor()}.`);
    }
}

class TriangleShape extends Shape
{
    draw(){
        console.log(`Desenhando um triângulo ${this.color.getColor()}.`);
    }
}

//Clientes:
const red = new RedColor();
const green = new GreenColor();
const blue = new BlueColor();
const black = new BlackColor();

const circle = new CircleShape(red);
const square = new SquareShape(blue);
const triangleGreen = new TriangleShape(green);
const triangleBlack = new TriangleShape(black);

circle.draw();
square.draw();
triangleGreen.draw();
triangleBlack.draw();


