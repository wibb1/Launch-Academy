time_capsule = []
print "Hello my friend. Would you please enter your name here:"
name = gets.chomp
name_input=""
while name_input.upcase != "FINISHED" 
  print "What would you like to add to the time capsule #{name}? If you are done entering items enter [FINISHED]"
  name_input = gets.chomp
  time_capsule.push(name_input)
end
time_capsule.pop()
puts "#{name}, thanks for trying our Time Capsule maker. Here is a list of the itmes in your Time Capsule!\n"
time_capsule.each {|i| puts "* #{i}"}