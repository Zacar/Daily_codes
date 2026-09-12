"""Build a Polygon Area Calculator
In this project, you will use object-oriented programming to create a Rectangle class and a Square class. The Square class should be a subclass of Rectangle and inherit its methods and attributes.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a Rectangle class.

When a Rectangle object is created, it should be initialized with width and height attributes. The class should also contain the following methods:

set_width: Sets the width of the rectangle.
set_height: Sets the height of the rectangle.
get_area: Returns area ( width×height
 ).
get_perimeter: Returns perimeter  2(width+height)
 .
get_diagonal: Returns diagonal  width2+height2−−−−−−−−−−−−−−√
 .
get_picture: Returns a string that represents the shape using lines of *. The number of lines should be equal to the height and the number of * in each line should be equal to the width. There should be a new line (\n) at the end of each line. If the width or height is larger than 50, this should return the string: Too big for picture..
get_amount_inside: Takes another shape (square or rectangle) as an argument. Returns the number of times the passed in shape could fit inside the shape (with no rotations). For instance, a rectangle with a width of 4 and a height of 8 could fit in two squares with sides of 4.
If an instance of a Rectangle is represented as a string, it should look like: Rectangle(width=5, height=10).

You should create a Square class that subclasses Rectangle.

When a Square object is created, it should be initialized with a single side length. The __init__ method should store the side length in both the width and height attributes from the Rectangle class.

The Square class should contain the following methods:

set_width: Overrides the set_width method from the Rectangle class. It should set the width and height to the side length.
set_height: Overrides the set_height method from the Rectangle class. It should set the width and height to the side length.
set_side: Sets the height and width of the square equal to the side length.
The Square class should be able to access the Rectangle class methods.

If an instance of a Square is represented as a string, it should look like: Square(side=9).

Usage example
rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))"""


import math

class Rectangle:
    def __init__(self,width,height):
        self.width=width
        self.height=height
    

    def set_width(self,width):
        self.width=width
    
    def set_height(self,height):
        self.height=height

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return 2 * (self.width + self.height)

    def get_diagonal(self):
        return math.sqrt(self.width ** 2 + self.height ** 2)

    def get_picture(self):
        if self.height > 50 or self.width > 50:
            return "Too big for picture."

        width= f"{'*' * self.width}\n"
        return width * self.height

    def get_amount_inside(self,Rectangle):
        return math.floor(self.get_area() / Rectangle.get_area())

    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"

class Square(Rectangle):
    def __init__(self,side):
        super().__init__(side,side)

    def set_side(self,side):
        self.height=side
        self.width=side

    def set_width(self,width):
        self.set_side(width)

    def set_height(self,height):
        self.set_side(height)

    def __str__(self):
        return f"Square(side={self.width})"


