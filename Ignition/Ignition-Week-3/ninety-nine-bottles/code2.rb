# I like this way the best
# It takes advantage of the computer to repeat individual snips of text
#It also uses the correct ending which is 
#'go to the store buy 99 more, 99 bottles of beer on the wall.'

bottles_wall = " bottles of beer on the wall."
bottle_wall = " bottle of beer on the wall."
bottles_beer1 = " bottles of beer."
bottles_beer2 = " bottles of beer!"
bottle_beer = " bottle of beer."
take_around = "Take one down and pass it around, "
bottles = 99
question = ""
while question != "no"
  until bottles == 1
    if (bottles).remainder(10)==0
      puts bottles.to_s + bottles_wall + bottles.to_s + bottles_beer2
      puts take_around + (bottles-1).to_s + bottles_wall
      puts
    else
      puts bottles.to_s + bottles_wall + bottles.to_s + bottles_beer1
      puts take_around + (bottles-1).to_s + bottles_wall
      puts
    end
    bottles -=1
  end
  puts bottles.to_s + bottle_wall + bottles.to_s + bottle_beer
  puts take_around + "no more " + bottle_wall
  puts "\nNo more" + bottles_wall + "no more" + bottles_beer1
  bottles = 99
  puts "Go to the store and buy #{bottles.to_s} more, " + bottles.to_s + bottles_wall
  puts "\nWould you like to go again? Enter [no] to exit."
  question = gets.chomp.downcase
end