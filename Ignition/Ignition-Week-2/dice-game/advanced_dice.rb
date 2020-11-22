# YOUR ADVANCED CODE, HERE
dieTop = 0
while dieTop <=0
  puts "How many sides does your dice have?"
  dieTop = gets.chomp.to_i
end
rollCount=0
while rollCount <=0
  puts "How many times would you like to roll your pair of dice?"
  rollCount = gets.chomp.to_i
end
doneCheck =""
while (doneCheck != "N") do
  timesRolls = rollCount
  while (timesRolls > 0) do
    roll1 = rand (1..dieTop)
    roll2 = rand (1..dieTop)
    puts "You rolled a #{roll1} and a #{roll2}. Total: #{roll1+roll2}"
    timesRolls -= 1
  end
  print "\nRoll Again? (y/n)> "
  doneCheck = gets.chomp.upcase
end