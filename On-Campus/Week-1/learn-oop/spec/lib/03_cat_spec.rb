require "spec_helper"

RSpec.describe "Cat" do

  describe %q(

    Instructions
    ------------

    Create a Cat class in `lib/cat.rb`. The constructor
    should take one argument, the name of the cat. The Cat
    class should have a reader for name.

  ) do
    describe "Cat.new" do
      it "creates a new Cat object when I name it 'Garfield'" do
        garfield = Cat.new("Garfield")
        expect(garfield).to be_a(Cat)
      end

      it "creates a new Cat object when I name it 'Grumpy'" do
        grumpy = Cat.new("Grumpy")
        expect(grumpy).to be_a(Cat)
      end
    end
  end

  describe %q(

    Instructions
    ------------

    Create a reader for `name` by either using
    `attr_reader`, or by defining a method that returns the
    value stored in the instance variable `@name`.

  ) do
    describe "cat.name" do
      it "writes to the @name instance variable" do
        garfield = Cat.new("Garfield")
        grumpy = Cat.new("Grumpy")

        expect(garfield.name).to eq("Garfield")
        expect(grumpy.name).to eq("Grumpy")
      end
    end
  end

  describe %q(

    Constructors
    ============

    The purpose of a constructor is to "set up" an object.
    If there are some default settings for the class, this
    is an excellent place to define that state.

    Instructions
    ------------

    In the `#initialize` method of the Cat class, create an
    instance variable `@lives`.

    We also need a reader for this instance variable.

  ) do
    describe "cat.lives" do
      it "reads the @lives instance variable" do
        garfield = Cat.new("Garfield")

        expect{ garfield.lives }.to_not raise_error
      end

      it "defaults to 9 lives on construction" do
        garfield = Cat.new("Garfield")

        expect(garfield.lives).to eq(9)
      end
    end
  end
end
