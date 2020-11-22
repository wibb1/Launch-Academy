For this assignment, you will create a Circle class and a Square class in Ruby. We've included a set of tests to help drive your development. Soon, you'll be writing tests too!

# Learning Goals

- Become comfortable coding using test-driven development (TDD) practices and the object-oriented programming (OOP) programming paradigm
- Further solidify your understanding of classes and instance methods in Ruby

## Getting Started

```no-highlight
et get geometric-classes
cd geometric-classes
```

Make sure you have `bundler` installed:

```
gem install bundler
```

Let bundler install the necessary dependencies for you, so that you can use the RSpec test suite:

```
bundle
```

Run the test suite to see if your code works:

```
rspec
```

## Understanding the Test Suite

The test suite provided will give you errors that help you decide what code needs to be written next. You'll need to read them carefully for clues on what to do!

For example:

```
 1) Circle#initialize takes a value for the radius
     Failure/Error: circle = Circle.new(5)

     ArgumentError:
       wrong number of arguments (1 for 0)
     # ./spec/circle_spec.rb:9:in `initialize'
     # ./spec/circle_spec.rb:9:in `new'
     # ./spec/circle_spec.rb:9:in `block (3 levels) in <top (required)>'
```

This tells us that the test that checks if the initialize method takes a radius value is failing. We can see that the specific problem is an `ArgumentError`, and that we are passing in the wrong number of arguments.

Our test wants to pass one value (5), but our current `Circle` class doesn't accept any arguments when creating a new instance.
We'll need to implement an `initialize` method in our `lib/circle.rb` so that it can take an argument and assign the value to its `@radius` attribute.

Once this is done, the first test should pass, and you can move on to the next one.

The requirements that the tests will be checking are also listed below:

## Circle class

The Circle initialize method should take the radius as a required argument and optional x and y coordinates, which represent the center of the circle. The x and y coordinates should default to the origin point (0, 0) if not provided.

### Methods

- radius - Returns the radius of the circle
- x - Returns the x coordinate of the circle
- y - Returns the y coordinate of the circle
- diameter - Returns the calculated diameter of the circle
- area - Returns the calculated area of the circle
- perimeter - Returns the calculated perimeter, or circumference of the circle

Use the formulas provided at [WolframAlpha](https://www.wolframalpha.com/input/?i=circle) as a guide.

You may use the Ruby constant `Math::PI` instead of defining it yourself.

## Square class

The Square class has many of the same methods as the Circle class. The Square initialize method should take the length of one side as a required argument, and optional x and y coordinates, which represent the **center point** of the square. The x and y coordinates should default to the origin point (0, 0) if not provided.

### Methods

- x - Returns the x coordinate of the square
- y - Returns the y coordinate of the square
- length - Returns the length of the square
- width - Returns the width of the square
- diameter - Returns the calculated diameter, or diagonal of the square
- area - Returns the calculated area of the square
- perimeter - Returns the calculated perimeter of the square
- contains_point?(x, y) - Returns true if the provided coordinates fall **within** or **on** the boundaries of the square. Returns false, otherwise. (You'll want to figure out where the sides of the box fall on the grid, then compare those to the coordinates.)

Again, use the formulas provided at [WolframAlpha](https://www.wolframalpha.com/input/?i=square) as a guide.
