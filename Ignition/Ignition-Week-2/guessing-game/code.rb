# Your code goes here
puts "Welcome to the Guessing Game! What difficulty would you like to play?\n Type Easy or Hard:"
difficulty = ""
until (difficulty == "easy" || difficulty == "hard") do
  puts "Please type easy or hard."
  difficulty = gets.chomp.downcase
end
if difficulty == "easy"
  highNumber = 10
else
  highNumber = 20
end
compNumber = rand(1..highNumber)
playerNumber = 0
guessNumber = 0
puts "I've picked a number between 1 and #{highNumber}. Now guess it!"
while (playerNumber < 1 || playerNumber > highNumber || playerNumber != compNumber) do
  playerNumber = gets.chomp.to_i
  if (playerNumber < 1 || playerNumber > highNumber)
    puts "Please enter a number between 1 and #{highNumber}"
  elsif playerNumber != compNumber
    puts "Nope try again"
  else
    puts "You win! Nice Job!"
  end 
  guessNumber = guessNumber + 1  # chose to put this inside the input check to record all incorrect entries - this could be changed by putting this statement into the elseif and else statements above
end  
puts "It only took you #{guessNumber} guesses!"