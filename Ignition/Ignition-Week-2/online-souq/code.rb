souq_list = ["old paperback book", "potato", "red onion", "dried lemon", "frankincense", "moon dust", "saffron", "glass spice jar", "red fabric", "orange fabric", "handicrafts", "small persian rug", "used medium space suit", "heffalump shag rug", "woozle hide purse"]
print "Hello, would you mind entering your name: "
name = gets.chomp
puts "\nThank you. Hello #{name}, welcome to our Souq. We have the following items:"
souq_list.each {|n| puts "* #{n}"}
print "\nWhat would you like to add to your cart? Enter [done] when you are finished. > "
user_selects = "-"
souq_cart = []
until user_selects == "done"
  user_selects = gets.chomp.downcase
  if souq_list.include?(user_selects)
    souq_cart.push(user_selects)
    print "\nWould you like another item? Enter [list] to see the items available or [done] if you are finished. > "
  elsif user_selects =="list"
    puts""
    souq_list.each {|n| puts "* #{n}"} 
    print "\nWhat would you like to add to your cart? Enter [done] when you are finished. > "
  elsif user_selects == "done"
  else
      puts "\nSorry we don't have that. Please make a selection from the items listed above. You can enter [list] to see the list again.  If you are done please enter [done] to exit"
  end
end
puts "\n#{name}, thanks for trying our online Souq platform.  Here is a list of the items in your cart!\n"
souq_cart.each {|n| puts "* #{n}"} 