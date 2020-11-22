### Learning Goals

- Get familiar with writing and organizing RSpec tests
- Refactor tests using the `let` keyword

### Getting Set Up

```no-highlight
et get test-flight
cd test-flight
bundle exec bundle install
```

### Instructions

Test-drive the implementation of an `Airplane` class in the _lib/airplane.rb_ file.

#### Part One: Create an Airplane

To create an airplane you need to specify the type, [wing loading](http://en.wikipedia.org/wiki/Wing_loading), and horsepower:

```ruby
my_plane = Airplane.new("cesna", 10, 150)
```

Write tests in the _spec/lib/airplane_spec.rb_ file to ensure that you can access each of these attributes after creating an airplane object. For example, you may have a test in the `describe "#initialization"` block that reads back the `type` after creating the object:

```ruby
my_plane = Airplane.new("cesna", 10, 150)
expect(my_plane.type).to eq("cesna")
```

To run the test suite use the `rspec` command within the project directory:

```no-highlight
$ rspec
...

Finished in 0.00069 seconds (files took 0.10908 seconds to load)
3 examples, 3 failures
```

_If the `rspec` command is not available, install it via `gem install rspec`._

Now, in true TDD fashion, update your _lib/airplane.rb_ file to properly initialize your object and make your tests pass.

#### Part Two: Make the Airplane do things

Once you have passing tests for the three attributes, write tests for the following methods that an instance of an Airplane can do. Once you run the tests and they fail, implement the methods needed to pass the tests.

- The `start` method should turn on the engine if it is not already running. It should return whether the engine was just started or if it has already been running:

```ruby
my_plane.start
#=> "airplane started"

# OR if the plane was already started

my_plane.start
#=> "airplane already started"
```

- The `takeoff` method should change the state of the plane to flying. The plane can only take off if the engine is already running. It should return whether the plane has taken off or not:

```ruby
my_plane.takeoff
#=> "airplane not started, please start"

# OR if the plane was already started

my_plane.start
my_plane.takeoff
#=> "airplane launched"
```

- The `land` method should change the state of the plane to landed. The plane can only land if it is currently flying. It should return whether the plane successfully landed or not (or whether it needs to be started):

```ruby
my_plane.land
#=> "airplane not started, please start"

# OR if the plane has been started but hasn't taken off

my_plane.start
my_plane.land
#=> "airplane already on the ground"

# OR if the plane is already in the air

my_plane.start
my_plane.takeoff
my_plane.land
#=> "airplane landed"
```

### Part Three: Refactoring Tests

At this point your test file should be getting fairly large and probably contains duplicate steps -- like initializing an airplane instance -- to setup each test. Remove some of the duplication by using the [`let` syntax in RSpec](https://relishapp.com/rspec/rspec-core/v/3-2/docs/helper-methods/let-and-let) to "lazily" initialize the airplane when it is needed.

#### Using `let`

```ruby
describe User do
  describe "#initialize" do
    it "has a first_name attribute" do
      user = User.new("Alex", "Jarvis")

      expect(user.first_name).to be_a(String)
      expect(user.first_name).to be("Alex")
    end

    it "has a last_name attribute" do
      user = User.new("Alex", "Jarvis")

      expect(user.last_name).to be_a(String)
      expect(user.last_name).to be("Jarvis")
    end
  end
end
```

In the example above, you can see that we have some code duplication, namely the line `user = User.new("Alex", "Jarvis")`. However, if we use the `let` method that RSpec provides us, we can DRY up our code.

```ruby
describe User do
  describe "#initialize" do
    let(:user) { User.new("Alex", "Jarvis") }

    it "has a first_name attribute" do
      expect(user.first_name).to be_a(String)
      expect(user.first_name).to be("Alex")
    end

    it "has a last_name attribute" do
      expect(user.last_name).to be_a(String)
      expect(user.last_name).to be("Jarvis")
    end
  end
end
```

So what is this actually doing? `let`, well... _lets_ us define a variable outside of our examples, and then reuse that variable within our test examples. Notice how the `let` line sits outside of both `it` blocks. This allows both `it` blocks to access the `:user` that has been created. When they access it, rspec translates it from a symbol, `:user`, to a variable, `user`, for us.

This is functionally equivalent to the first code snippet, in the sense that the `user` is redefined for each example. You can make changes to `user` in one example, and you'll be provided with a fresh copy of `user` in subsequent examples. Now we've defined `user` in one place, and if we need make changes to `user`, we only have change one line of code!

`let` lazily loads your variable. That means that, in any given example, the variable doesn't get defined until it is accessed for the first time. If you don't call `user` at all in an example, it won't be defined for that example.

_NOTE:_ As noted above, the symbol `:user` is only used to define the variable name. The `user` object is not contained within a symbol called `:user` -- `let` simply translates that symbol into a variable name.

### Extra Challenge: Keep track of the Airplane's fuel status

Add a `fuel` internal attribute to your airplane that is set at initialization. Write tests for scenarios where the plane does not have enough fuel to complete the above actions.

Each of the `start`, `takeoff`, and `land` methods should use up some amount of fuel every time they are called. If any of the methods cannot be completed due to a lack of fuel, they should return a different status message. If necessary, add an additional method for checking the fuel level of the plane to make writing the tests easier.
