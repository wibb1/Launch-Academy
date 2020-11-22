### Learn Object-Oriented Programming

This repository is a set of tests that will guide you through the basics of **Object-Oriented Programming**.

### Instructions

1) Download the repository

```no-highlight
$ et get learn-oop
```

2) Download the necessary dependencies

```no-highlight
$ cd learn-oop
$ gem install bundler
$ bundle
```

3) Run the test suite

```no-highlight
$ rake

Person
  .new
    should create a new Person object (FAILED - 1)

Failures:

  1) Person .new should create a new Person object
     Failure/Error: jean_luc_picard = Person.new
     NameError:
       uninitialized constant Person
     # ./spec/lib/person_spec.rb:6:in `block (3 levels) in <top (required)>'

Finished in 0.00101 seconds (files took 0.83316 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./spec/lib/person_spec.rb:5 # Person .new should create a new Person object
```

Your first task is to define the `Person` class within the `lib` folder. Make a new file and call it `person.rb`, then define the class of `Person` inside the file as the test suite indicates.


### Goal

Make the test suite green. (In other words, satisfy all the things that the tests want your code to do!)

Don't worry yet about how the tests are working--we'll discuss testing more later. For now, let the tests teach you what code you need to write. Focus on resolving whatever error is currently in front of you, and celebrate each time you clear an error and move on to a new one! Eventually, you'll progress far enough that all the tests will pass.

When you have finished, bask in the glory of the green dots and your new-found understanding of OOP.

Oh, and don't forget to `et submit`.
