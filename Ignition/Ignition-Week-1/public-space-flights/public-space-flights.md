While space travel is fun and exciting, it's also costly. To make some extra cash, your team has decided to write a Ruby program to interact with the public wishing to get on a space flight with you.

## Getting Started

From your `challenges` folder in the terminal, type the following commands:

```no-highlight
et get public-space-flights
cd public-space-flights
code .
```

To run your code,

```no-highlight
ruby code.rb
```

### Part 1

Write a program that takes user input and prints to the screen.

Here is what your program should do:

- Greet the customer.
- Ask how many adult tickets they would like.
- Accept the user's answer and save it as a variable.
- Ask how many child tickets they would like.
- Accept the user's answer and save it as a variable.
- Print a sentence returning the number of adult and child tickets the user has asked for.

### Example Output:

```no-highlight
Hello brave customer! Welcome to our exclusive space flight tours.
How many adult tickets would you like?
> 6
How many child tickets would you like?
> 2
Here are your 6 adult tickets and 2 child tickets!
```

{% show_hint %}
* Don't forget to grab input from the user via `gets.chomp` to eliminate newline characters
{% endshow_hint %}

{% show_solution %}

```ruby
puts "Hello brave customer! Welcome to our exclusive space flight tours."
puts "How many adult tickets would you like?"
adult_tickets = gets.chomp
puts "How many child tickets would you like?"
child_tickets = gets.chomp
puts "Here are your " + adult_tickets + " adult tickets and " + child_tickets + " child tickets!"
```

{% endshow_solution %}

### Part 2

Last of all, the customer has taken a look at your food menu and would like to know what some orders would cost. Impressed by your programming skill, he asks you to calculate the price of some different combinations of menu items. Luckily, you have the cost of each menu item stored in your Ruby code as a variable! Copy and paste this menu into your Ruby `code.rb` file:

```ruby
dehydrated_banana = 1.27
tofu_cake = 4.17
cheese_spread = 3.79
dehydrated_ice_cream_sandwich = 0.75
```

The orders that the customer is wondering about are listed below. For each one, write a line of code that calculates the cost of the order by using the variables above. Use `puts` to print each answer to the screen!

- Two tofu cakes and two dehydrated ice cream sandwiches
- Eight packets of cheese_spread and a dehydrated_banana
- Three of each item on the menu

### Example Output:

```ruby
9.84
31.59
29.94
```

{% show_hint %}

* Remember that you can add both strings together and numbers together.

{% endshow_hint %}

{% show_solution %}

```ruby
dehydrated_banana = 1.27
tofu_cakes = 4.17
cheese_spread = 3.79
dehydrated_ice_cream_sandwich = 0.75

puts tofu_cakes ${html`*`} 2 + dehydrated_ice_cream_sandwich ${html`*`} 2
puts cheese_spread ${html`*`} 8 + dehydrated_banana
puts (dehydrated_banana + tofu_cakes + cheese_spread + dehydrated_ice_cream_sandwich) ${html`*`} 3
```

{% endshow_solution %}
