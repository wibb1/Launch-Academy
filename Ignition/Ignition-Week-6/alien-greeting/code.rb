name = ""
language = ""

def greets(name,language = nil)
  random_greeting = ["Hi", "Yo", "hey", "Howdy"].sample
  case language
  when "spanish"
    "Hola #{name}!"
  when "italian"
    "Ciao #(name)!"
  when "irken"
    "DOOM de doom #{name}!"
  else
    "#{random_greeting} #{name}"
  end
end


puts "What is your name?"
name = gets.chomp
puts "What is your language?"
language = gets.downcase.chomp
puts greets(name,language)