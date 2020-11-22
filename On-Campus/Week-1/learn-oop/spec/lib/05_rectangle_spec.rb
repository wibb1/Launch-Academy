require "spec_helper"

RSpec.describe "Rectangle" do
  describe %q(

    Instructions
    ------------

    Create a Rectangle class. The constructor should take
    two arguments:
      * length
      * width

    Add readers for both length and width.

  ) do

    subject(:rectangle) { Rectangle.new(3, 5) }

    describe "Rectangle.new" do
      it "requires arguments for length and width" do
        expect(rectangle).to be_a(Rectangle)
      end
    end

    describe "rectangle.length" do
      it "reads the @length instance variable" do
        expect(rectangle.length).to eq(3)
      end
    end

    describe "rectangle.width" do
      it "reads the @width instance variable" do
        expect(rectangle.width).to eq(5)
      end
    end
  end

  describe %q(

    Behavior
    ========

    We have covered how to define and change the **State**
    of our objects. We will now address the second key
    component of Object-Oriented Programming: **Behavior**.

    We can give our objects behavior by creating methods on
    our objects.

    Instructions
    ------------

    Create a method that computes the area of the rectangle.

      +----------------+
      |                |
      |                | w
      |                |
      +----------------+
              l

          a = w * l

  ) do
    describe "rectangle.area" do
      it "computes the area by muliplying length times width" do
        first_rectangle = Rectangle.new(3, 5)
        second_rectangle = Rectangle.new(4, 6)

        expect(first_rectangle.area).to eq(15)
        expect(second_rectangle.area).to eq(24)
      end
    end
  end

  describe %(

    Default Arguments
    =================

    We can specify default arguments for our methods.

    ```
    def increment(x, amount = 1)
      x + amount
    end
    ```

    ```
    increment(5)
    => 6
    increment(5, 3)
    => 8
    ```

    This allows us to provide reasonable default values,
    as well the ability to override these defaults when
    the need arises.

    Instructions
    ------------

    Add some default behavior to our Rectangle class.

    Define an x and y coordinate for the location of
    a rectangle. It should default to the origin point,
    (0, 0) on object construction.

    Add accessors to the `@x` and `@y` instance variables
    so that we can read them and write to them.

  ) do
    describe "Rectangle.new" do
      it "sets the coordinates of the rectangle to the origin point" do
        rectangle = Rectangle.new(2, 5)

        expect(rectangle.x).to eq(0)
        expect(rectangle.y).to eq(0)
      end

      it "lets us specify the coordinates of the rectangle" do
        rectangle = Rectangle.new(2, 5, -1, 3)

        expect(rectangle.x).to eq(-1)
        expect(rectangle.y).to eq(3)
      end
    end

    describe "rectangle.x=" do
      it "writes to the @x instance variable" do
        rectangle = Rectangle.new(2, 5)
        rectangle.x = -5

        expect(rectangle.x).to eq(-5)
      end
    end

    describe "rectangle.y=" do
      it "writes to the @y instance variable" do
        rectangle = Rectangle.new(2, 5)
        rectangle.y = 7

        expect(rectangle.y).to eq(7)
      end
    end
  end

  describe %q(

    Instructions
    ------------

    Create a method that computes the diagonal of the
    rectangle.

      +-------+
      |      /|
      |     / |
      |    /  |
      | d /   | w
      |  /    |
      | /     |
      |/      |
      +-------+
          l
         _________
    d = √ l² + w²


    **Hint:** Use the `Math::sqrt(x)` method provided by Ruby.

      http://ruby-doc.org/core/Math.html

  ) do
    describe "rectangle.diagonal" do
      it "computes the length of the diagonal" do
        first_rectangle = Rectangle.new(3, 5)
        second_rectangle = Rectangle.new(4, 6)

        expect(first_rectangle.diagonal).to be_within(0.001).of(5.831)
        expect(second_rectangle.diagonal).to be_within(0.001).of(7.211)
      end
    end
  end

  describe %q(

    Instructions
    ------------

    Create methods that let us move a rectangle object in
    the x, y plane.

      * The `#move_right` method should increment the `@x`
        instance variable.

      * The `#move_up` method should increment (add 1 to) the
        `@y` instance variable.

      * The `#move_left` method should decrement the `@x`
        instance variable.

      * The `#move_down` method should decrement (subtract 1 from)
        the `@y` instance variable.

    Bonus Challenge
    ---------------

    After you get the following tests to pass, can you think
    of a way to define the `#move_down` and `#move_left`
    methods in terms of the `#move_up` and `#move_right`
    methods? Give it a try.

  ) do
    subject(:rectangle) { Rectangle.new(2, 5, -8, 10) }

    describe "rectangle.move_right" do
      it "increments the @x instance variable" do
        rectangle.move_right
        expect(rectangle.x).to eq(-7)
      end
    end

    describe "rectangle.move_up" do
      it "increments the @y instance variable" do
        rectangle.move_up
        expect(rectangle.y).to eq(11)
      end
    end

    describe "rectangle.move_left" do
      it "decrements the @x instance variable" do
        rectangle.move_left
        expect(rectangle.x).to eq(-9)
      end
    end

    describe "rectangle.move_down" do
      it "decrements the @y instance variable" do
        rectangle.move_down
        expect(rectangle.y).to eq(9)
      end
    end
  end
end
