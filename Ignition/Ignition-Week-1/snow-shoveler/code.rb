# YOUR CODE GOES HERE

#DESIGNATE THE VARIABLES - for easy reference
padwidth = 0.00
padlength = 0.00
snowInches = 0.00
padArea = 0.00


#GET THE INPUT NUMBERS

#WIDTH

puts "\nPlease enter the landing pad's width in feet"
padWidth = gets.to_f
while padWidth == 0.00
	puts "\nPlease enter a numeric value for the landing pad's width in feet"
	padWidth = gets.to_f
end

#LENGTH
puts "\nPlease enter the landing pad's length in feet"
padLength = gets.to_f
while padLength == 0.00
	puts "\nPlease enter a numeric value for the landing pad's length in feet"
	padLength = gets.to_f
end

#DEPTH OF SNOW
puts "\nPlease enter the snowfall in inches"
snowInches = gets.to_f
while snowInches == 0.00
	puts "\nPlease enter a numeric value for the snowfall in inches"
	snowInches = gets.to_f
end

# NOTE: might be able to do this using an array and for each statement maybe I will work on that for the rest of the week


#CALCULATE THE PAD AREA, FEET OF SNOWFALL, AND CUBIC FEET OF SNOW
padArea = padWidth * padLength
snowFeet = snowInches / 12
snowFT3 = snowFeet * padArea


#DELIVER THE OUTPUT
puts "\nCubic Feet: #{snowFT3.round}\n"

#PROVIDE THE PRICE CHART - allows the person to adjust the number if they want to
puts "\nOur price chart is as follows:\n\n0 - 49 cubic ft: $20\n50 - 149 cubic ft: $50\n150 - 299 cubic ft: $100\n300+ cubic ft: $150"

#CALCULATE THE QUOTE
if snowFT3.round > 300.00
	Quote = 150.00
elsif snowFT3.round > 150.00
	Quote = 100.00
elsif snowFT3.round > 50.00
	Quote = 50.00
else
	Quote = 20.00
end

#PROVIDE THE QUOTE
puts "\nYour quote: $#{Quote}\n\n"
