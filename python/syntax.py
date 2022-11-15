

# Python print statement
print("Hello World")

# Use command to check python installation
# python --version

# Use command to run python script Example
#  python syntax.py

#  to open a repl in the terminal use command `python` and `exit()` 
# to exit the repl

# if statement
# Python uses indentation to define code blocks, instead of brackets.
# if 5 > 2:
#     print ("Five is greater than two!")

# VARIABLES
# In python variables are created when you assign a value to it
x = 5 
y = "John"
print(x,y)
# Python has no command for declaring a variable.
# Casting 
x = str(3) # x will be '3'
y = int(3) # y will be 3
z = float(3) # z will be 3.0

# Get the type 
x = 5 
y = "John"
print(type(x)) # <class 'int'>
print(type(y)) # <class 'str'>

# COMMENTS
# Comments starts with a  # , and Python will ignore them

# variable names are case-sensitive
a = 4
A = "Sally"
print(a,A)

# VARIABLE NAMES
# name rules
#  variables must start with a letter or the underscore character
#  variables cannot start with a number
#  variables can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )   
#  variable names are case-sensitive (age, Age and AGE are three different variables)

# Camel Case
myTest = "Hello World"

# Pascal Case
myTest = "Hello World"

# Snake Case
my_test = "Hello World"


# Many values to multiple variables

x, y, z = "Orange", "Banana", "Cherry"
print(x,y,z)


# Unpacking a collection
# if you have a collection of values in a list, tuple etc. 
# Python allows you extract the values into variables.
# This is called unpacking.

fruit = ["apple", "banana", "cherry"]
x, y, z = fruit
print (x,y,z)

# Python has commenting capability for the purpose of in-code documentation.

def test():
    """
    This is a docstring.
    """
    pass


