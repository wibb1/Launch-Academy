responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

# Confirm the correct number of responses have been stored by printing the number to the console (`20`)
print responses.length

# Ask the user what their question is, and store it as a variable called `question`
print "\nWhat is your question? "
question = gets.chomp
# Output a random response to the user's question
puts responses.fetch(rand(0..responses.length-1))

# Output the number of responses that include the word "yes"
yes_count = 0
responses.each do |i| 
  if i.downcase.include?("yes") 
    yes_count += 1
  end
end
puts yes_count
# Output the number of responses that include the words "no" or "not"
no_count=0
responses.each do |i| 
  if i.downcase.include?("no") 
    no_count += 1
  elsif i.downcase.include?("not") 
    no_count += 1
  end
end
puts no_count
# Output the alphabetized list of responses
alpha_responses = responses.sort
puts alpha_responses
# Output the first and last responses from the alphabetized list
puts alpha_responses.first
puts alpha_responses.last

# Add 1 response of your choosing to the current list
responses.push("No way!")

# Concat an array of 3 additional responses to the current list
added_responses = ["Yes, without question!", "I'm not sure, how about you try again.", "Are you kidding me, of all the questions you want to know that!"]
responses = responses.concat(added_responses)

# Confirm the correct number of responses have been stored by printing the number to the console (`24`)
puts responses.length