**Oh-em-gee**, we've run out of Brussels sprouts! Time to use our new understanding of class methods to perform the calculations necessary to ship out some more.

### Learning Goals
* Use existing unit tests to guide the writing of methods that make the tests pass
* Observe how a set of unit tests set the stage for writing code to produce desired behavior
* Write a class method as an alternate constructor

### Getting Started
```no-highlight
et get emergency-brussels-sprouts
cd emergency-brussels-sprouts
bundle exec bundle install
```

**If you haven't installed [Bundler](http://bundler.io/) yet, you will get an error when attempting to run `bundle exec bundle install`.** Bundler is a Ruby dependency manager, and you'll be using it extensively to install the gems in your app `Gemfile`. To install it, simply run `gem install bundler` and then retry `bundle exec bundle install`.

### Instructions
Our Belgian contacts can send us emergency Brussels sprouts, but we'll need to share the plane's cargo space with a [Cheesy Poofs](https://www.youtube.com/watch?v=-XlYj1iyAlk) shipment. To maximize our sprouts haul, we need to be able to calculate weights and interact with the containers to plan our shipment accordingly.

A few important facts:
* Each **ingredient** has a name and weight
  * A single Brussels Sprout weighs 20 grams.
  * A single Cheesy Poof weighs 0.5 grams.
* Each **container** has a weight, a maximum carrying capacity (the maximum weight it can hold inside), and the type of ingredient it carries.
  * Each container can only carry one type of ingredient.
  * Brussels sprouts containers weigh 90 kg and can carry a maximum weight of 140 kg.
  * Cheesy Poof containers weigh 20 kg and can carry a maximum weight of 10 kg (they are very sturdy).


The Belgians, who have confronted such problems before, have provided you with some unit tests to help you complete this challenge. Run `bundle exec rspec` and you should see the following error:

```no-highlight
An error occurred while loading ./spec/lib/01_ingredient_spec.rb.
Failure/Error:
  describe Ingredient do
    let(:ingredient) { Ingredient.new("Cheesy Poof", 0.0005) }

    describe ".new" do
      it "takes a name and weight as arguments" do
        expect(ingredient).to be_a(Ingredient)
      end
    end

    describe "#name" do

NameError:
  uninitialized constant Ingredient
# ./spec/lib/01_ingredient_spec.rb:3:in `<top (required)>'
```

What is this error telling us? It seems that the `Ingredient` class doesn't exist yet! Add it to `lib/ingredient.rb` and re-run your test. You should get a new error. New errors are the way of measuring progress as you resolve the test suite. Continue progressing through the remaining tests and allow them to help you decide what code needs to be written next.

### Tips
* One wise Launcher once described the experience of TDD as like "skateboarding with binoculars on" -- it feels weird at first to rely on a test to tell you whether your code is accomplishing what it needs to, rather than running your code yourself. The more you practice TDD, the more comfortable this will feel!
* Write your `Ingredient` class first and then your `Container` class.
* For `create_from_grams`, you'll want to use a [class method](https://learn.launchacademy.com/lessons/class-instance-methods) to convert a new ingredient's weight from grams to kg. Remember that an "alternate constructor" method has the ability to take in information in a different format than `initialize`, and convert it before calling `Ingredient.new`. Try building such a method to convert the grams to kilograms and make a new Ingredient instance!
* The number of Brussels sprouts that a container holds should be whole numbers and not decimals.
* Using a `while` loop with floating point numbers where one number is very small can easily throw your results off by 1. You can avoid this issue by first calculating *how many* of the ingredient can fit by weight, and then using either a `do` loop, or a `count` integer in your while loop conditional instead of the float `weight`.
* Remember that the weight of a container is the sum of the container's weight and its total contents' weight.
