# this one uses the HEREDOCS method
bottles = 99
question = ""
while question != "no"
  until bottles == 1
    if (bottles).remainder(10)==0
      text10 = <<~text10
      \n#{bottles} bottles of beer on the wall, #{bottles} bottles of beer! 
      Take one down and pass it around, #{bottles-1} bottles of beer on the wall. 
      text10
      puts text10
    else
      text =<<~text
      \n#{bottles} bottles of beer on the wall, #{bottles} bottles of beer.
      Take one down and pass it around, #{bottles-1} bottles of beer on the wall.
      text
      puts text
    end
    bottles -=1
  end
  text1 =<<~text1
  \n1 bottle of beer on the wall, 1 bottle of beer.
  Take one down and pass it around, no more bottles of beer on the wall.
  text1
  puts text1
  end_text =<<~end_text
  \nNo more bottles of beer on the wall, no more bottles of beer.
  Go to the store and buy some more, 99 bottles of beer on the wall.
  end_text
  puts end_text
  puts "\nWould you like to go again? Enter [no] to exit."
  question = gets.chomp.downcase
end