For this lesson, you will build the "Zooniverse", a fictional location from the
television series,
[*The Mighty Boosh*](http://www.bbc.co.uk/comedy/mightyboosh/clips/episodes_series1.shtml).

## Objectives

* Build objects in Ruby
* Understand object composition
* Practice test-driven development (TDD)

## Getting Started
Run the following:

```no-highlight
et get object-oriented-marathon
cd object-oriented-marathon
bundle
bundle exec rspec
```
You'll see something like
```no-highlight
An error occurred while loading ./spec/1_gorilla_spec.rb.
Failure/Error: require_relative "../lib/cage"

LoadError:
  cannot load such file -- /Users/beinneighe93/launch/bos23/object-oriented-marathon/lib/cage
# ./spec/spec_helper.rb:5:in `require_relative'
# ./spec/spec_helper.rb:5:in `<top (required)>'
# ./spec/1_gorilla_spec.rb:1:in `require'
# ./spec/1_gorilla_spec.rb:1:in `<top (required)>'
```

The important bit of this message is `cannot load such file -- /Users/beinneighe93/launch/bos23/object-oriented-marathon/lib/cage`, which tells us that Ruby is looking for, but can't find, `cage.rb`.
Create this file and rerun the test, repeating this process until you no longer encounter any missing-file errors.

## Test-Driven Development

Next, follow the [Red-Green-Refactor](http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html) cycle, letting the tests guide you. In other words:

##### Step 1: Red
Run the tests and note the failures.

```no-highlight
bundle exec rspec
// failing test
```

##### Step 2: Green

Write some code to make the test pass.

```no-highlight
bundle exec rspec
// passing test
```

##### Step 3: Refactor

Evaluate and improve what you have written. Refactor your code by extracting
duplication into methods. Extract functionality into classes.

Rerun your test suite after every refactor to ensure that your changes don't break your application.

## Wrap Up

After you've completed the exercise, watch us work through the challenge by
checking out the video solution below.

{% show_solution %}
{% vimeo_video '153573063' %}
{% endshow_solution %}
