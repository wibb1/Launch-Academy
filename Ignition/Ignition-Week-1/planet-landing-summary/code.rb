require 'pry'
# YOUR CODE GOES HERE

gazooCount = 0

# the date you leave
puts "What date did you leave on?"
leaveDate = gets.chomp
if leaveDate == "The Great Gazoo"
  gazooCount = gazooCount + 1
end

# the date you return home
puts "What date did you return on?"
returnDate = gets.chomp
if returnDate == "The Great Gazoo"
  gazooCount = gazooCount + 1
end

# the planet name
puts "what planet did you visit?"
planetName = gets.chomp
if planetName == "The Great Gazoo"
  gazooCount = gazooCount + 1
end

# the number of new species you see
puts "How many species did you see there?"
speciesCount = gets.chomp
if speciesCount == "The Great Gazoo"
  gazooCount = gazooCount + 1
end

# the name of your favorite beach
puts "What was the name of your favorite beach?"
favBeach = gets.chomp
if favBeach == "The Great Gazoo"
  gazooCount = gazooCount + 1
end

# the number of times you see [The Great Gazoo]
#(https://en.wikipedia.org/wiki/The_Great_Gazoo)

#We left March 13th for The Planet of Zetox. 
#During the trip I saw over 240 alien species! 
#My favorite beach during the trip was Hanna-Barbera Bay. 
#After an amazing trip, we returned on May 1st. 
#Can't wait to go back!

def wrap(s, width=80)
  s.gsub(/(.{1,#{width}})(\s+|\Z)/, "\\1\n")
end


puts ""
puts ""
puts wrap ("We left #{leaveDate} for The Planet of #{planetName}. During the trip I saw over #{speciesCount} alien species! My favorite beach during the trip was #{favBeach}. After an amazing trip, we returned on #{returnDate}. Can't wait to go back!")
puts ""

puts "You had #{gazooCount} The Great Gazoos"
