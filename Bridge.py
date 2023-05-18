from abc import ABC, abstractmethod

#Interface de Cores:
class Color(ABC):

    @abstractmethod
    def getColor(self):
       pass

#Implementação Concretas de Cores:
class RedColor(Color):

    def getColor(self):
        return "Vermelho"

class GreenColor(Color):

    def getColor(self):
        return "Verde"

class BlueColor(Color):

    def getColor(self):
        return "Azul"

class BlackColor(Color):

    def getColor(self):
        return "Preto"

#Implementação de Formas:
class Shape(ABC):
    def __init__(self, color:Color):
        self.color = color

    @abstractmethod
    def draw(self):
        pass

#Abstrações Refinadas:
class CircleShape(Shape):

    def draw(self):
        print(f"Desenhando um círculo {self.color.getColor()}")

class SquareShape(Shape):

    def draw(self):
        print(f"Desenhando um quadrado {self.color.getColor()}")

class TriangleShape(Shape):

    def draw(self):
        print(f"Desenhando um triângulo {self.color.getColor()}")

#Clientes:
red = RedColor()
green = GreenColor()
blue = BlueColor()
black = BlackColor()

circle = CircleShape(red)
square = SquareShape(blue)
triangleGreen = TriangleShape(green)
triangleBlack = TriangleShape(black)

circle.draw();
square.draw();
triangleGreen.draw()
triangleBlack.draw()