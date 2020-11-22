# YOUR CODE GOES HERE
puts "Hello brave customer! Welcome to our exclusive space flight tours." 
puts "how many tickets would you like?"
adultTickets = gets.chomp
puts "How many child tickets would you like?"
childTickets = gets.chomp
puts "Here are your #{adultTickets} and #{childTickets} child tickets!"

dehydrated_banana = 1.27
tofu_cake = 4.17
cheese_spread = 3.79
dehydrated_ice_cream_sandwich = 0.75

order1 = 2 * (tofu_cake + dehydrated_ice_cream_sandwich)
order2 = 8 * cheese_spread + dehydrated_banana
order3 = 3 * (tofu_cake + dehydrated_banana + dehydrated_ice_cream_sandwich + cheese_spread)

puts order1
puts order2
puts order3