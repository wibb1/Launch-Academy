## Getting Started
From your challenges folder, type the following commands:

```no-highlight
et get tracking-donations  
cd tracking-donations  
code . 
```  

All your work should be done in the provided `code.rb` file. You can run your code in the terminal with:

```no-highlight
ruby code.rb
```   
When you're finished, remember to submit with `et submit`!

## Part 1: $100 in Donations

Running a Space Program, as we will see throughout our time together, costs a pretty penny! To support your efforts, you're now taking donations. Let's write a program that informs you when you have reached $100 in donations.

Using a `while` loop, write a program that allows you to type in numbers to the command line, one by one, until the sum of those numbers is at least 100.

### Example Output

```no-highlight
Enter your values here!
> 50
> 20.50
> 0.75
> 31.0
You've reached 100!
```

{% show_solution %}
```ruby
puts "Enter your values here!"

total = 0.0
while total < 100 do
  print "> "
  input = gets.chomp.to_f
  total = total + input
end

puts "You've reached 100!"
```
{% endshow_solution %}

## Part 2: Using the `times` Operation

If your last donation earns you more than $125, share that you've earned another $25, for every $25 you've earned in excess of $100!

### Example Output

```no-highlight
Enter your values here!
> 50
> 20.50
> 0.75
> 89.0
You've reached 100!
You've earned another 25!
You've earned another 25!
```

```no-highlight
Enter your values here!
> 50
> 20.50
> 0.75
> 110.0
You've reached 100!
You've earned another 25!
You've earned another 25!
You've earned another 25!
```

You can use the `.times` operation to complete this part of the exercise.

{% show_solution %}
```ruby
puts "Enter your values here!"

total = 0.0
while total < 100 do
  print "> "
  input = gets.chomp.to_f
  total = total + input
end

puts "You've reached 100!"

if total >= 125
  twenty_five_mores = ((total - 100) / 25).to_i
  twenty_five_mores.times do
    puts "You've earned another 25!"
  end
end
```
{% endshow_solution %}
