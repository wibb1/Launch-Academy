#  Write Ruby<->English answers here as comments in your code

# 1)
# * numbers is an array
# numbers.each do |number|
#   puts 3 * number
# end

#For every element called 'number' in the 'numbers' array print out the element times 3 

# 2)
# * names is an array
# names.each do |name|
#   puts name.length
# end

#For ever element called 'name' in the 'names' array print out the length of the element

# 3)
# * numbers is an array
# sum = 0
# numbers.each do |number|
#   sum += number
# end
# puts sum

#Set sum variable equal to zero. Sum every element called 'number' in the 'numbers' array and place the value in variable sum, then print the sum.

# 4)
# * hash is a hash
# hash.each do |name, age|
#   puts "#{name} is #{age} years old."
# end

# for every key called 'name' and value called 'age' in the hash called 'hash' print "(key called 'name') is (value called 'age') years old." 

# 5)
# * account is a hash
# sum = 0
# account.each do |transaction, value|
#   sum += value
# end
# puts "The value the account is #{sum}"

#Set the sum variable equal to zero. In the hash called 'account' for every key called 'transaction' sum all the values called 'value' and place them in the sum variable.  Print "The value the account is " followed by the resulting sum. (even thought the sentence doesn't make sense:o) 

# 6)
# * addresses is a hash
# addresses.each do |name, address|
#   puts "#{name} lives on #{address}"
# end

#for every key called 'name' and value called 'address' in the hash called 'addresses' print the (name called 'name' lives on (value called 'address') 

#  Write English<->Ruby answers here as comments in your code

# 1. `For every element 'word' in the array 'sentences' print out the word.`
sentences = ["apple", "grape", "orange", "peach"]
sentences.each do |word|
  puts word
end

# 2. `For every element 'phone_number' in the array 'numbers' print out the phone number if it is a MA area code.`

numbers = [4015555555, 6175555555, 9785555555, 5085555555, 4135555555, 7815555555, 3515555555, 7745555555, 3395555555, 8575555555, 9785555555, 1235555555]
ma_codes = [617, 857, 781, 339, 508, 774, 978, 351, 413]
ma_numbers = []
numbers.each do |phone_number|
  if ma_codes.to_s.include?(phone_number.to_s[0,2])
    ma_numbers.push(phone_number)
  end
end
puts ma_numbers


# 3. `For every element number in the array 'numbers' print out every odd number.`

numbers = (1..10).to_a
puts numbers.select(&:odd?)

# 4. `For every name-age pair in the hash 'ages', print out each pair.`

ages = {"Tom" => 10, "Dick" => 25, "Harry" => 30}
ages.each do |name, age|
  puts "Name: #{name} - Age: #{age}."
end
# 5. `For every name-age pair in the hash 'ages', print out a pair if the age is > 10.`
ages.each do |name, age|
  if age > 10
    puts "Name: #{name}, Age: #{age}."
  end
end

# 6. `For every name-age pair in the hash 'ages', print out a pair if the age is even.`

ages.each do |name, age|
  if age % 2 === 0
    puts "Name: #{name} and Age: #{age}."
  end
end

# Write Ruby code to find out the answers to the following questions:
array = [28214, 63061, 49928, 98565, 31769, 42316, 23674, 3540, 34953, 70282, 22077, 94710, 50353, 17107, 73683, 33287, 44575, 83602, 33350, 46583]

# * What is the sum of all the numbers in `array`?
sum = 0
array.each do |i|
  sum += i
end
puts "Sum of the numbers is #{sum}."

# * How would you print out each value of the array?
puts "The list of values in array is:" 
array.each do |i|
  puts i
end

# * What is the sum of all of the even numbers?
even_array = array.select(&:even?)
sum_even=0
even_array.each do |i|
  sum_even += i
end
puts "The sum of the even values is #{sum_even}"

# * What is the sum of all of the odd numbers?
odd_array = array.select(&:odd?)
sum_odd=0
odd_array.each do |i|
  sum_odd += i
end
puts "The sum of the even values is #{sum_odd}"

# * What is the sum of all the numbers divisble by 5?
sum_five = 0
array.each do |i|
  if i % 5 == 0
    sum_five += i
  end
end
puts "The sum of the numbers divisble by 5 is #{sum_five}"

# * What is the sum of the squares of all the numbers in the array?
sum_squares = 0
array.each do |i|
  sum_squares += i*i
end
puts "The sum of the squares of all the numbers is #{sum_squares}"

# Write Ruby code to find out the answers to the following questions:

array = ["joanie", "annamarie", "muriel", "drew", "reva", "belle", "amari", "aida", "kaylie", "monserrate", "jovan", "elian", "stuart", "maximo", "dennis", "zakary", "louvenia", "lew", "crawford", "caitlyn"]

# * How would you print out each name backwards in `array`?
puts "Not sure what you ment so"
puts  "The names backwards are:"
array.each do |i|
  puts i.reverse
end
puts "Or did you mean the list backwards"
puts array.reverse()
# * What are the total number of characters in the names in `array`?
puts "The total number of characters is #{array.join.length}"
# * How many names in `array` are less than 5 characters long?
count = 0
array.each do |i|
  if i.length < 5
    count += 1
  end
end
puts "There are #{count} names with less than 5 characters."
# * How many names in `array` end in a vowel?
count = 0
array.each do |i|
  if  ["a","e","i","o","u"].include?(i.reverse[0])
    count += 1
  end
end
puts "There are #{count} names that end in a vowel."
# * How many names in `array` are more than 5 characters long?
count = 0
array.each do |i|
  if i.length >  5
    count += 1
  end
end
puts "There are #{count} names with more than 5 characters."
# * How many names in `array` are exactly 5 characters in length?
count = 0
array.each do |i|
  if i.length == 5
    count += 1
  end
end
puts "There are #{count} names with exactly than 5 characters."
