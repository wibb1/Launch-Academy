# YOUR CODE GOES HERE

#PART 1
knifeJ = [2.1, 0.77, 5, 1, 3]
torchJ = [6, 3.5, 7]
handJ = [2, 1]
blockhead = [0.75, 0.43]

knifeSum = knifeJ.sum
torchSum = torchJ.sum
handSum = handJ.sum
blockSum = blockhead.sum
totalSum = knifeSum+torchSum+handSum+blockSum



puts "Knife Juggling:" 
puts format("%.2f", knifeSum)
puts "Torch Juggling:"
puts format("%.2f", torchSum)
puts "Hand Balancing:"
puts format("%.2f", handSum)
puts "Human Blockhead:"
puts format("%.2f", blockSum)
puts "Total:"
puts format("%.2f", totalSum)
puts "Average Tip Value:"
puts format("%.4f",totalSum/12)


#PART 2

#Ask for an audience volunteer.
puts "Hello everybody! Today, I will be showing you acts of great daring. Can I have an audience volunteer?"

#Ask the volunteer's name.
puts "There's our brave volunteer! What's your name?"

#Accept the user's input and save it as a variable.
volName = gets.chomp
puts "Please provide a big round of applause for #{volName}."

#Ask what the volunteer's favorite number is.
puts "OK #{volName}, what is your favorite number."

#Accept the user's input and save it as a variable.
favNumber = gets.chomp

#State that you and your friend will juggle these knives around the volunteer for a certain number of seconds, where the number of seconds is equal to the volunteer's favorite number.
puts "Now #{volName}, my assistant and I are going to juggle these knives for #{favNumber} seconds with you in the center.  Don't worry #{volName}, we have only missed once or twice, but our insurrance covered everything.  By the way #{volName}, you shouldn't close your eyes, but you shouldn't move either.  You ready?"