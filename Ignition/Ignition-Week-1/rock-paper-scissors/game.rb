# YOUR CODE GOES HERE
userGuess = ""
compGuess = 1
doneCheck = "Y"
userChoice = 1

while doneCheck == "Y" #allows the game to be played without exiting
	
	#THE USER INPUT
	until userGuess == "r" || userGuess == "p" || userGuess == "s" 
		puts "\nChoose your shape: [r] for rock; [p] for paper; or [s] for scissors."
		userGuess = gets.chomp.downcase
		#error message
		if (userGuess == "r" || userGuess == "p" || userGuess == "s")
		else 
		puts "\nPlease limit your choices to r, p, or s"
		#end error message
		end
	end 
	#END USER INPUT
	
	#DATA PREPERATION FOR USE LATER
	if userGuess == "r"
		userChoice = 1
		playerChoice = "rock"
	elsif userGuess == "p"
		userChoice = 2
		playerChoice = "paper"
	else
		userChoice = 3
		playerChoice = "scissors"
	end 	#END DATA PREP
	
	#OUTPUT PLAYER CHOICE
	puts "\nPlayer chose #{playerChoice}." 
	
	#BEGIN COMPUTER CHOICE
	compGuess = rand(1..3)	
	#puts compGuess = gets.to_i #for error checking only
	#puts compGuess #for error checking only

	#END COMPUTER CHOICE
	
	#BEGIN COMPUTER OUTPUT (1=r, 2=p, 3=s)
	if(compGuess == 1)
		puts "\nComputer chose rock."
	elsif (compGuess == 2)
		puts "\nComputer chose paper."
	elsif (compGuess == 3)
		puts "\nComputer chose scissors."
	else
		puts "ERROR" #error check
	end		
	# END COMPUTER OUTPUT
	
	#BEGIN COMPARISON/OUTPUT (1=r, 2=p, 3=s)
	if (userChoice == compGuess)
		puts "\nTie, nobody wins!"
	elsif (userChoice == 1 && compGuess == 2)
		puts "\nPaper beats rock: Computer wins!"
	elsif (userChoice == 2 && compGuess == 1)
		puts "\nPaper beats rock: Player wins!"	
	elsif (userChoice == 3 && compGuess == 1)
		puts "\nRock beats scissors: Computer wins!"
	elsif (userChoice == 1 && compGuess == 3)
		puts "\nRock beats scissors: Player wins!"
	elsif (userChoice == 2 && compGuess == 3)  
		puts "\nScissors beats paper: Computer wins!"
	else 
		puts "\nScissors beats paper: Player wins!"
	end		
	#END COMPARISON/OUTPUT
	
	# REPLAY QUESTION
	puts "\n\nWould you like to play again? (Y/N)"
	doneCheck = gets.chomp.upcase
	until doneCheck == "Y" || doneCheck == "N" 
		puts "Please enter y or n."
		doneCheck = gets.chomp.upcase
	end 
	#END REPLAY QUESTION
	userGuess = ""
end
puts"\n\nThank You For Playing!"

#This makes me want to try rock, paper, scissors, lizard, spock