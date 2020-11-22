#word = "" #the word that the player is trying to guess
#guess_array = [] #"word" as an array of characters
#guess_count = 10 #the number of incorrct guesses
#guess_play = [] #the players guesses put in the correct order
#guessed = [] #the players guesses


def print_puzzle(word, guessed = [])
  word.each_char do |char|
    if guessed.include?(char)
      print char
    elsif char == " "
      print "_"#added this to allow multiple words - the program automatically gives you the spaces
    else
      print "-"# had to change this to allow spaces above
    end
  end
  puts
end

def question(statement,one,two)
  question = ""
  while question != one && question != two
    puts statement
    question = gets.chomp.downcase
  end
  return question
end
yes_no = ""
question("Would you like to play hangman? Enter yes or no.", "yes", "no")
while yes_no != "no" 
  word = ""
  guessed = []
  while yes_no != "yes" #first player input loop
    puts "Enter a word, with no spaces, that you would like to play:" 
    word = gets.chomp
    yes_no = question("You have picked #{word}, is this correct? Enter yes or no.", "yes", "no")
  end
  puts "\e[H\e[2J" #clears the terminal so the second player can't see the word
  guess_array = word.split
  guess_count = 10 # hangman player is allowed 10 incorrect guesses
  while guessed.!include(guess_array) || guess_count < 1 #check this once above is complete
    puts print_puzzle(word,guessed)
    while guess.include(" ") || guess.length > 1
      guess = question("Please pick a letter.",['a'..'z'],"quit")
    end
    if guess == "quit"
      break
    end
    if word.include(guess)
      puts "Good Guess!"
    else
      guess_count -=
      puts "Sorry the word doesn't have that letter.  You have #{guess_count} guesses left."
    end
    guessed.push(guess) # check against this to ensure they are not guessing the same letter
  end
  if guess_array = word.split
    puts "You Win!"
  else
    puts "Sorry you lose."
  end
  question("Would you like to play again? Enter yes or no.", "yes", "no")
end