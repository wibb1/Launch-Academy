The cost of rocket fuel is ever increasing, and the operations director has asked you to help her out.

## Getting Started
```no-highlight
et get average-mileage
cd average-mileage
code .
```

### Instructions Part 1

Create a Ruby method `average` that calculates a ship's average gas mileage and returns it.
The method should take a single argument that represents the list of recent trip mileage amounts.

She's supplied some test data for you to check your results.

* The Shuvver Ship had the following gas mileage: `260, 483, 792, 357, 546` for an average of `487.6`
* The Zhook Cruiser had the following gas mileage: `186, 223, 173, 297, 303` for an average of `236.4`
* The Nanoship had the following gas mileage: `646, 883, 761, 932, 778` for an average of `800`

Ensure that your resulting average shows necessary decimal places so the team knows each ship's precise gas mileage average.

{% show_solution %}
```ruby
def average(mileage_list)
  sum = 0
  mileage_list.each do |mileage|
    sum += mileage
  end

  sum / mileage_list.size.to_f
end

shuvver_mileages = [260, 483, 792, 357, 546]
shuvver_average = average(shuvver_mileages)
puts shuvver_average # => 487.6
```
{% endshow_solution %}

### Instructions Part 2

Now that you have the average mileage, you can assign a mileage rating.
Write a method `mileage_rating` that determines and returns the mileage rating based on the single argument `average`.

* An average of 1000 mpg or above gets an **A**
* An average greater than or equal to 750 mpg but less than 1000 mpg gets a **B**
* An average greater than or equal to 500 mpg but less than 750 mpg gets a **C**
* An average greater than or equal to 250 mpg but less than 500 mpg gets a **D**
* An average less than 250 mpg gets an **F - Use this ship as a last resort! We aren't made of money.**

{% show_solution %}
```ruby
def mileage_rating(average)
  if average >= 1000
    'A - Let us know if someone has actually made this happen.'
  elsif average >= 750
    'B'
  elsif average >= 500
    'C'
  elsif average >= 250
    'D'
  else
    'F - Use this ship as a last resort! We aren\'t made of money!'
  end
end

shuvver_mileage_rating = mileage_rating(shuvver_average) # Shuvver Average is calculated in Part 1
puts shuvver_mileage_rating # => 'D'
```
{% endshow_solution %}

### Instructions Part 3

The mileage averages are tabulated and now it's time to decide the best ship to use for an upcoming mission.

The best mileages, in order, are awarded to `Nanoship, Shuvver, Snacky Cabs, Resisty's Ship, and the Zhook Cruiser`.

Implement a `rankings` method that requires one argument `ships`.
This argument should represent the ordered list of ships that ranked most efficient.

Use the `each_with_index` method on `Array` to have your method output the following string, given the above best mileage:

```no-highlight
1. Nanoship
2. Shuvver
3. Snacky Cabs
4. Resisty's Ship
5. Zhook Cruiser
```

{% show_solution %}
```ruby
def rankings(ships)
  ships.each_with_index do |ship, index|
    puts "#{index + 1}. #{ship}"
  end
end

rankings(['Nanoship', 'Shuvver', 'Snacky Cabs', 'Resisty\'s Ship', 'Zhook Cruiser'])
```
{% endshow_solution %}
