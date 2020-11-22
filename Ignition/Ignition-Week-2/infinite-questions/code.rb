# YOUR CODE HERE
wholeOrder = []
##require 'pry' ## for troubleshooting only 
answer = ""
while answer != "no"
  puts "Can I get you anything? Type 'no' to complete the order."
  answer = gets.chomp.downcase
  wholeOrder.push(answer) 
  ##binding.pry ## for troubleshooting only 
end
wholeOrder.delete("no")
puts "So you're entire order is:"
wholeOrder.each do |i|
  puts i
end
puts "Okay, bye!"