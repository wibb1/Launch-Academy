## Introduction

Let's do a short exercise to reinforce assigning variables, string interpolation, and printing to the terminal.

## Getting Started

From your `challenges` folder, type the following command:

```
et get planet-landing-summary
cd planet-landing-summary
code .
```

All your work should be done in the provided `code.rb` file.

When you're finished, remember to submit with `et submit`!

## Exercise

Your space exploration team opted to land on a planet well-known for its balmy climate and interesting wildlife. Because you're researchers, you'll need to document some information from the trip. In order to later recall details, you decide to write a Ruby program that will store the information for you. The program will have trip itinerary details as well as interesting things from the trip so the next time you land, you can remember your favorite spots.

The goal of your program is to generate a trip summary that outputs like this:  

```no-highlight
We left March 13th for The Planet of Zetox. During the trip I saw over 240 alien species! My favorite beach during the trip was Hanna-Barbera Bay. After an amazing trip, we returned on May 1st. Can't wait to go back!
```

#### 1) Create variables and assign values:   
> Be sure to use **expressive variable names** and values of your choosing
Use variables in ruby to store:

* the date you leave
* the date you return home
* the planet name
* the number of new species you see
* the name of your favorite beach
* the number of times you see [The Great Gazoo](https://en.wikipedia.org/wiki/The_Great_Gazoo)

#### 2) Use string interpolation

You _could_ use the `+` method to combine strings together, but for this program there's an easier way. Try to generate the paragraph on your own before checking out the hint!
> You will use a `puts` statement in order to show your summary

#### 3) Ensure the output shows in your terminal  

As long as you've navigated to this directory (using `cd planet-landing-summary`), you can run your code in the terminal with:

```
$ ruby code.rb
```

If you'd like to see your variable values as you work, feel free to put a `binding.pry` on a line in your code. We've already included the `require 'pry'` for you at the top!  

When you're finished, remember to submit with `et submit`!

{% show_hint %}
- Think about different ways we can form large strings in Ruby
- Research if Ruby has ways of making multi-line strings that allow for interpolation
- Example of using string interpolation:

```ruby
twenty = 10 + 10

puts "#{twenty} is equal to 20."
```  
This outputs:
```sh
20 is equal to 20.
```
{% endshow_hint %}
