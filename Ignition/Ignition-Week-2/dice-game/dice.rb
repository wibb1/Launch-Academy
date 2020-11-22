# YOUR CODE, HERE
doneCheck = ""
while doneCheck != "S" do
  roll1 = rand (1..6)
  roll2 = rand (1..6)
  print "You rolled a #{roll1} and a #{roll2}\nTotal: #{roll1+roll2}\nPress 'Enter' to roll again, 'S' to stop\n"
  doneCheck = gets.chomp.upcase
end
