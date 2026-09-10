"""Build a Player Interface
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should define an abstract class named Player that inherits from the abc.ABC class.

The Player class should have an __init__ method that sets:

The moves attribute to an empty list.
The position attribute to (0, 0).
The path attribute to a list containing the initial position.
The Player class should have a method named make_move that:

Uses random.choice to get a random move from the moves attribute (defined in the concrete class).
Adds the values from the selected move to the current position and updates the position attribute.
Appends the new position tuple to the path attribute.
Returns the new position.
The Player class should have an abstract method named level_up to be implemented in concrete classes.

You should define a Pawn class that inherits from the Player class.

The Pawn class should use super() to call the parent's __init__ method and then set the moves attribute to a list of tuples representing x, y coordinates.

Each coordinate tuple should represent a movement of 1 unit in the following directions: up, down, left, right.

The Pawn class should implement a concrete level_up method by adding more moves to the moves attribute. The added moves should represent the four diagonal movements (for example, 1 unit down plus 1 unit left)."""

import random
from abc import ABC, abstractmethod

class Player(ABC):
    def __init__(self):
        self.moves=[]
        self.position=(0,0)
        self.path=[self.position]
    
    def make_move(self):
        move = random.choice(self.moves)
        self.position=(self.position[0]+move[0],self.position[1]+move[1])
        self.path.append(self.position)
        return self.position     

    @abstractmethod
    def level_up(self):
        pass

class Pawn(Player):
    def __init__(self):
        super().__init__()
        self.moves=[(0,1),(0,-1),(-1,0),(1,0)]

    def level_up(self):
        self.moves.extend([(-1,-1),(-1,1),(1,-1),(1,1)])

