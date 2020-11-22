# YOUR CODE GOES HERE
items_we_have = [chips, popcorn, skittles, granola, mentos, gum, cheetos, m&ms]
puts "What snack would you like today?"
request = gets.chomp.downcase
requestIndex = items_we_have.index(request)

#Begin input checker
while requestIndex.nil? && request != "done"
  if request == "list" 
    puts items_we_have
    puts "Please enter another item, or enter [done] to exit"
    request = gets.chomp.downcase
    requestIndex = items_we_have.index(request)
  else
    puts "Sorry we don't have that item."
    puts "Please enter another item, enter [list] to see a list of available items, or enter [done] to exit"
    request = gets.chomp.downcase
    requestIndex = items_we_have.index(request) 
  end
end 
#End input checker

#Begin output checker
if request == "done"
  puts "Sorry we could help you today."
else
  puts "Item index:"
  puts requestIndex
end
#End output checker

#the issue that I see with this is that you can enter a single letter within the string and have an index returned - which is why you should use an array rather than what you have then each is a discrete entry.  I could do this with something like itemsArray = items_we_have.split(" ") and switch some of the code but figured this was beyond the scope of this exercise