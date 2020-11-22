# there are 3 different codes in this file and the exercise is done 3 different ways
bottles = 99
question = ""
while question != "no"
  until bottles == 1
    if (bottles).remainder(10)==0
      puts "\n#{bottles} bottles of beer on the wall, #{bottles} bottles of beer!"
      puts "Take one down and pass it around, #{bottles-1} bottles of beer on the wall."
    else
      puts "\n#{bottles} bottles of beer on the wall, #{bottles} bottles of beer."
      puts "Take one down and pass it around, #{bottles-1} bottles of beer on the wall."
    end
    bottles -=1
  end
  puts "\n1 bottle of beer on the wall, 1 bottle of beer."
  puts "Take one down and pass it around, no more bottles of beer on the wall."
  puts "\nNo more bottles of beer on the wall, no more bottles of beer."
  puts "Go to the store and buy some more, 99 bottles of beer on the wall."
  puts "\nWould you like to go again? Enter [no] to exit."
  question = gets.chomp.downcase
  bottles = 99
end