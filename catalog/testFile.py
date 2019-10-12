from sympy import *
from random import *

x,y,a,b = symbols('x y a b')
s = randint(3, 6)
from sympy.abc import x
from sympy.solvers.inequalities import solve_rational_inequalities
from sympy import Poly

solve_rational_inequalities([[
    ((Poly(-x + 1), Poly(1, x)), '>='),
    ((Poly(-x + 1), Poly(1, x)), '<=')]])
