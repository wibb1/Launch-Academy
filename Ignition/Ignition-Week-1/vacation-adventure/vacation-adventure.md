## Getting Started

From your `challenges` folder, type the following command:

```
et get vacation-adventure
cd vacation-adventure
code .
```

All your work should be done in the `code.rb` file. You can run your code in the terminal with:

```
ruby code.rb
```

### Generating Random Numbers

`rand` returns values between 0 and 1, exclusive.

```ruby
number = rand
0 <= number && number < 1  # this statement will always return "true"
```

If we give `rand` an argument it will generate random numbers between 0 and the argument, exclusive.

```ruby
number = rand(5)
0 <= number && number < 5  # this statement will always return "true"
```

## Exercise

On the fourth night, you and your team can't decide which crazy adventure to go on: dune sailing,
anti-gravity bounce-house, or lava surfing.  You are tasked with creating a program that will decide
which adventure to go on.  **Figure out how to create a random number that will pick the different
activities.**  So if 1 is picked you go dune sailing, 2 you go to the anti-gravity bounce-house, and 3 you go lava surfing. Make the program write to the screen which adventure was chosen.

{% show_hint %}
* Use the `rand` method, and review your Flow Control article!  
* Use `require 'pry'` and insert a `binding.pry` as you build your program to see what's taking place.
{% endshow_hint %}
