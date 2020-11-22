# YOUR CODE GOES HERE
items_we_have = ["chips", "popcorn", "skittles", "granola", "mentos", "gum", "cheetos", "m&ms"]
puts "Hello, I'm the first and only Talking Vending Machine.\nWhat would you like today? We have the following items:\n#{items_we_have}"
request = gets.chomp.downcase
requestIndex = items_we_have.index(request)
while (requestIndex.nil? && request != "done") do
  if request == "list"
    puts items_we_have
    puts "Please enter an item, or enter [done] to exit."
    request = gets.chomp.downcase
    requestIndex = items_we_have.index(request)
  else
    puts"Sorry we don't have that item."
    puts "please enter an item, enter [list] to see a list of avaliable items, or enter [done] to exit."
    request = gets.chomp.downcase
    requestIndex = items_we_have.index(request)
  end
end
if request != "done"
  puts "How many would you like?"
  requestCount = gets.chomp
  requestCount2 = requestCount.to_i
  while (requestCount.nil? && requestCount.include?("tons") && request != "done") do
    puts "How many would you like? Please enter a value greater than 0"
    requestCount = gets.chomp
    requestCount2 = requestCount.to_i 
  end  
  if requestCount.include?("tons")
    requestCount2 = rand(1..20)
    puts "Oh boy, tons! How does #{requestCount2} sound?"
    requestCount2.times {|i| print request, "\n"}
    puts "There you go! Come again!"
  else requestCount2 > 0
    requestCount2 = requestCount.to_i
    puts "ok here are your #{requestCount2}"
    requestCount2.times {|i| print request, "\n"}
    puts "There you go! Come again!"
  end
else
  puts "Sorry we could help you."
end