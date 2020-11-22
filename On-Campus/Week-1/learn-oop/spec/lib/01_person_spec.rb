require "spec_helper"

RSpec.describe "Person" do

  describe %q(

    Object-Oriented Programming
    ===========================

    Object-Oriented Programming, or OOP for short, allows us
    to model the world around us in terms of objects.
    Everything is an object. Pizza, statue, cup, window,
    person, dog, cat, final exam, etc; these are all objects.

    Objects have state. A slice of pizza that came straight
    out of the oven is hot. One that has been sitting on the
    table for a few hours is most definitely cold. A cup can
    be full, or empty. An exam has a due date and a grade.
    Think of object state as the adjectives that describe the
    object.

    Objects have behaviors. A dog can bark, run, eat, and
    sleep. A person can do these things to, but instead of
    barking, they would probably speak. You can open a
    window. You can complete an exam. Think of object
    behavior as the verbs which that object can do.

    We model our world using objects by considering the
    **states** we want to store on our objects, and the
    **behaviors** we want to define for our objects.

    In the following exercises, we will explore the programming
    paradigm that is OOP.

    First, we start with **Classes**


    Ruby Classes
    ============

    Think of a class as the "schematics" for building
    an object. In this case, we are defining the set of
    instructions which will create a new "Person".

    Calling `Person.new` will construct a new and unique
    instance of that class.

    Instructions
    ------------

    Define the Person class in `lib/person.rb`.

  ) do

    describe "Person.new" do
      it "should create a new Person object" do
        jean_luc_picard = Person.new
        expect(jean_luc_picard).to be_a(Person)
      end
    end
  end
end
