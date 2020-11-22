Use `.each` for arrays, hashes and compound data structures.

## Getting Started
```no-highlight
et get iteration-drills
cd iteration-drills
code .
```

### Turning `.each` into English

*example*

```ruby
# cities is an array
cities.each do |city|
  puts city
end
```

*answer*

`For every element called 'city' in the array 'cities', print out 'city' `

Write English interpretations of the following Ruby code:

1.

```ruby
# numbers is an array
numbers.each do |number|
  puts 3 * number
end
```

2.

```ruby
# names is an array
names.each do |name|
  puts name.length
end
```

3.

```ruby
# numbers is an array
sum = 0
numbers.each do |number|
  sum += number
end
puts sum
```

4.

```ruby
# hash is a hash
hash.each do |name, age|
  puts "#{name} is #{age} years old."
end
```

5.

```ruby
# account is a hash
sum = 0
account.each do |transaction, value|
  sum += value
end
puts "The value the account is #{sum}"
```

6.

```ruby
# addresses is a hash
addresses.each do |name, address|
  puts "#{name} lives on #{address}"
end
```

### Turning English into `.each`

*example*

`For every element 'number' in the array 'numbers' print out the number.`

*answer*

```ruby
numbers.each do |number|
  puts number
end
```

1. `For every element 'word' in the array 'sentences' print out the word.`

2. `For every element 'phone_number' in the array 'numbers' print out the phone number if it is a MA area code.`

3. `For every element number in the array 'numbers' print out every odd number.`

4. `For every name-age pair in the hash 'ages', print out each pair.`

5. `For every name-age pair in the hash 'ages', print out a pair if the age is > 10.`

6. `For every name-age pair in the hash 'ages', print out a pair if the age is even.`

### Arrays

1. Consider the following array:

```ruby
array = [28214, 63061, 49928, 98565, 31769, 42316, 23674, 3540, 34953, 70282, 22077, 94710, 50353, 17107, 73683, 33287, 44575, 83602, 33350, 46583]
```

Write Ruby code to find out the answers to the following questions:

* What is the sum of all the numbers in `array`?
* How would you print out each value of the array?
* What is the sum of all of the even numbers?
* What is the sum of all of the odd numbers?
* What is the sum of all the numbers divisble by 5?
* What is the sum of the squares of all the numbers in the array?

2. Consider the following array:

```ruby
array = ["joanie", "annamarie", "muriel", "drew", "reva", "belle", "amari", "aida", "kaylie", "monserrate", "jovan", "elian", "stuart", "maximo", "dennis", "zakary", "louvenia", "lew", "crawford", "caitlyn"]
```

Write Ruby code to find out the answers to the following questions:

* How would you print out each name backwards in `array`?
* What are the total number of characters in the names in `array`?
* How many names in `array` are less than 5 characters long?
* How many names in `array` end in a vowel?
* How many names in `array` are more than 5 characters long?
* How many names in `array` are exactly 5 characters in length?
