## Getting Started
From your challenges folder, enter the following commands:

```no-highlight
et get infinite-questions  
cd infinite-questions  
code . 
```  

All your work should be done in the provided code.rb file. As long as you've navigated to this directory (using cd infinite-questions), you can run your code in the terminal with:

```no-highlight
ruby code.rb
```   

When you're finished, remember to submit with `et submit`!

### Learning Goals  
* Implement a while loop dependent on user input  
* Utilize pry to follow a while loop step-by-step  

### Part 1

A lot of the services in your space rockets are automated. The vending machine on board is one of them! Write a program that asks an astronaut if you can get them anything, and then accepts their input. If they typed anything other than "no", the loop should run again! After the loop ends, say goodbye.

### Example Output

```no-highlight
Can I get you anything?
> A soda, please
Can I get you anything?
> Nah, that's okay.
Can I get you anything?
> Are you broken?!!
Can I get you anything?
> Oh god, this will never end will it...
Can I get you anything?
> no
Okay, bye!
```

This could get pretty frustrating for our user, because they don't know how to stop the loop. How could you help them out?

{% show_solution %}
```ruby
input = ""

while input != "no" do
  puts "Can I get you anything? Enter 'no' when you're done."
  print "> "
  input = gets.chomp
end

puts "Okay, bye!"
```
{% endshow_solution %}


### Part 2 - Use Pry to Learn More About Loops

Did you know you can use `pry` to help debug your loops?
* On the line after you store the user's input, insert a
`binding.pry` statement (_don't forget `require 'pry'` up at the top!_)
* Run `ruby code.rb`  
* You'll hit the `pry` and by typing `input` you'll be able to see the current value  
* Press CTRL-D while inside the pry to move onto the next run of the loop
* When at the `pry` prompt, you can also reassign the value of the `input` variable by entering `input = "this new item"`

{% show_solution %}
```ruby
require 'pry'

input = ""

while input != "no" do
  puts "Can I get you anything? Enter 'no' when you're done."
  print "> "
  input = gets.chomp
  binding.pry
end

puts "Okay, bye!"
```

```no-highlight
> ruby code.rb
Can I get you anything?
> Yes please!
pry > CTRL-D
Can I get you anything?
> Cookies sound delicious!
pry > CTRL-D
Can I get you anything?
> I'd love some ice cream!
pry > answer = "no"
pry > CTRL-D
Okay, bye!
```
{% endshow_solution %}
