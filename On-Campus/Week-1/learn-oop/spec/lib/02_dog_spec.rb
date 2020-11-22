require "spec_helper"

RSpec.describe "Dog" do

  describe %q(

    Object Construction
    ===================

    When we call the `.new` class method, a new instance of
    the class is created. Behind the scenes, the
    `#initialize` method is called with the arguments
    passed to `.new`.

    By defining the `#initialize` method on our class, we
    can begin to store object "state".

    Instructions
    ------------

    Create a Dog class in `lib/dog.rb`.

    Write an `#initialize` method within that class which
    takes one argument, called "name".

    Store the name in an instance variable called `@name`.

  ) do

    describe "Dog.new" do
      it "creates a new Dog object when I name it 'Fido'" do
        fido = Dog.new("Fido")
        expect(fido).to be_a(Dog)
      end

      it "creates a new Dog object when I name it 'Spot'" do
        spot = Dog.new("Spot")
        expect(spot).to be_a(Dog)
      end
    end
  end

  describe %q(

    Readers
    =======

    An object with "state" is useful only if we can
    retrieve the state of the object. Currently, an
    instance of the Dog class knows what its name is, but a
    user of the Dog class does not.


    Instructions
    ------------

    Add an instance method to the Dog class so that we can
    ask it what its name is.

    There are two ways to accomplish this:

    ```
    class Dog
      def initialize(name)
        @name = name
      end

      def name
        @name
      end
    end
    ```

    We define readers on object properties quite frequently.
    Ruby has a built-in shortcut for doing this:

    ```
    class Dog
      attr_reader :name

      def initialize(name)
        @name = name
      end
    end
    ```

  ) do

    describe "dog.name" do
      it "reads the @name instance variable" do
        fido = Dog.new("Fido")
        spot = Dog.new("Spot")

        expect(fido.name).to eq("Fido")
        expect(spot.name).to eq("Spot")
      end
    end
  end
end
