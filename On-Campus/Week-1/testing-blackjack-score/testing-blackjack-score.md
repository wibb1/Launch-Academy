### Introduction

When playing cards at the casino, accuracy is of extreme importance. One number off could be the matter of thousands or millions of dollars lost. For this exercise, we are going to write unit tests for the method that calculates the total of a hand in blackjack.

Why do we ask you to do this? Writing good tests allows you to make sure the behavior you expect -- within your methods, classes, etc. -- is actually happening. Thinking about your tests first also gives you direction in the design process of your code.

Basically, tests enable you to write your actual code more efficiently and intelligently! They also make debugging way less frustrating down the line as you build bigger and bigger programs.

### Getting Set Up

```no-highlight
et get testing-blackjack-score
cd testing-blackjack-score
bundle exec bundle install
```

### The Rules of Blackjack Scoring

For now, we are not going to worry about the actual _gameplay_ of Blackjack (that will come soon), but rather, simply how it is scored. Scoring in Blackjack is interesting, as the goal in Blackjack is to get your hand to add up as close to 21 points as possible, but not go over (called a bust)! The tricky thing is, Aces can be scored differently, based on how close to 21 you are.

A score is calculated by adding up the ranks of the cards in a player's hand as follows:

- Cards 2 through 10 are scored by the value printed on them (2 of Hearts is 2 points, 8 of Spades is 8 points, etc).
- Face cards (Jack, Queen, King) are worth 10 points
- Aces are worth either 11 points or 1 point, whichever value yields the best score/doesn't make you go over 21 points.

### Testing with RSpec

The testing framework we'll use for this exercise is [RSpec](http://rspec.info/). RSpec is a DSL (Domain Specific Language) that makes writing tests easier and more semantic. It is heavily used in the Rails community.

The RSpec [documentation](https://relishapp.com/rspec) is a great place to start learning what methods are available to you when writing tests. Look through `rspec-core` and `rspec-expectations`. Avoid the `rspec-mocks` and `rspec-rails` sections for now.

### Getting Started

There is already a `Deck` and `Card` class set up with some example tests for your `Deck`. You'll find those tests in the `deck_spec.rb` file inside the `spec` folder. Take a few minutes to carefully read through those tests. We've provided some hints and suggestions (in the form of code comments) to get you started!

Then, check out the `hand_spec.rb` file. Begin writing the tests (before your actual code!) for the `#calculate_hand` method in the `Hand` class. This method should look at all of the cards in the hand, and add up how many points they come to. Make sure to cover as many "edge" cases as you can: hands with or without Aces, and situations where Aces should be worth 11 points or 1 point!

When you've written your tests for the `#calculate_hand` method, run the tests and watch them fail. Now comes the fun part: Write code to make those tests pass, one by one! Remember to run your test suite early and often.

Install the dependencies:

```
$ bundle
```

Run the test suite:

```
$ rspec spec
```

Since Aces are a special case, it is helpful to simplify the problem. Make Aces
worth 11 points. When you get the basic functionality of the application
working, _then_ attempt to solve the problem of handling Ace scoring. This is a
common strategy when problem solving with code: get the code working for a
simple case, then move on to the more complex cases.

As you code, go one test at a time and make each test pass. Our advice is to keep the hardest (Ace-related) situations for last. This is a common strategy when problem solving with code: get the code working for a
simple case, then move on to the more complex cases.By the time you have all tests passing, your `calculate_hand` method should be able to calculate any type of Blackjack hand accurately!
