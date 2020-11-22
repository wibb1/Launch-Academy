### Introduction

A [Souq](http://en.wikipedia.org/wiki/Souq) is an outdoor marketplace full of vegetables, spices, old books, textiles and all kinds of wonderful goodies. You have been tasked with writing code for one of the first online outdoor marketplaces that will help Souq vendors get their goods out to the entire universe!

### Getting Started

```no-highlight
et get online-souq  
cd online-souq
code .  
```

You can run the provided `code.rb` file with:
```no-highlight
ruby code.rb
```

### Part 1 - Create your storefront
We can use an array to store the contents of our cart in a variable called
`souq_cart`. Write a program that does the following:

* Greet the shopper and take their name. Store this as `name`.
* Ask the user what they want to add to their shopping cart. Here is the kicker. They must ask for something from the following items. Programmers like to start out small before moving into more complex things, so the list of possible items is small! Here is a list of possible items they can choose from. If they are not on the list, the user should be notified so:

```
* old paperback book
* potato
* red onion
* dried lemon
* frankincense
* moon dust
* saffron
* glass spice jar
* red fabric
* orange fabric
* handicrafts
* small Persian rug
* used medium space suit
* heffalump shag rug
* woozle hide purse
```

* Give the user an option to type a command like "FINISHED" which stops the user from getting asked to add more items.
* If they entered an item, store that item in the the cart.
* Once finished, print out the contents of the cart of the user to see in the following format (`name` here is "Elon"):

```
Elon, thanks for trying our online Souq platform. Here is a list of the items in
your cart!:

* handicrafts
* saffron
* moon dust
* orange fabric
* woozle hide purse
```

{% show_solution %}

```ruby
# Initialize our array of items to choose from.

items = ["old paperback book", "potato", "red onion", "dried lemon", "frankincense", "moon dust", "saffron", "glass spice jar", "red fabric", "orange fabric", "handicrafts", "small persian rug", "used medium space suit", "heffalump shag rug", "woozle hide purse"]


# Greet the user, and print out our selection of items.

print "What is your name?: "
name = gets.chomp

puts "Welcome #{name}!"
puts
puts "Here is a list of items you can choose to buy!:"
items.each do |item|
  puts " #{item}"
end
puts

# Ask the user which items they would like to purchase

input = ""
shopping_cart = Array.new

while true
  puts "What would you like to buy? (type FINISHED when you're done)"
  print "> "
  input = gets.chomp.downcase

  if input == "finished"
    break
  elsif items.include?(input)
    shopping_cart << input
  else
    puts "Sorry, that item is not in our store yet!"
  end
end


# List the items in the user's cart

puts
puts "#{name}, thanks for trying our online Souq platform. Here is a list of items in your cart!:"

shopping_cart.each do |item|
  puts "* #{item}"
end
```

{% endshow_solution %}


### Part 2 - Refine your storefront

Update your program from Part 1 to store another variable of items that the user
entered but couldn't be in the cart. The output of your program should be
something like the following:

```
Elon, thanks for trying our online Souq platform. Here is a list of the items in
your cart!:

* handicrafts
* saffron
* moon dust
* orange fabric
* woozle hide purse

Btw, we noticed you tried entering in some items that aren't part of the online
Souq. We don't have the following items yet but will let you know if they show
up!:

* toothpaste
* sandwich
* fake bear fur
* siffron
```
