# code.rb is the Meets Expectations - code2.rb includes the optional challenges
flight_time = [2.0, 5.0, 7.5, 8.5, 9.0, 10.0, 11.5, 13.5, 14.5, 17.0, 18.0, 19.0, 24.0]
class String
  def notnumeric?
    return false if self =~ /\A\d+\Z/
    false if Float(self) rescue true
  end
end
puts "What time are you leaving?"
guest_time = gets.chomp
while guest_time.notnumeric?
  puts "Sorry I dont understand that time.\n"
  puts "What time are you leaving?"
  guest_time = gets.chomp
end
guest_time = guest_time.to_f
guest_flight_time = flight_time.find {|i| i >= guest_time}
guest_flight = flight_time.index(guest_flight_time)+1
puts "You should catch Flight #{guest_flight} leaving at #{guest_flight_time}"
if guest_flight == 13
  puts %Q(***DON'T STOP...BELIEVIN'***)
  puts %Q(
  Just a small town girl
  Living in a lonely world
  She took the midnight train going anywhere
  Just a city boy
  Born and raised in South Detroit
  He took the midnight train going anywhere
  
  A singer in a smoky room
  A smell of wine and cheap perfume
  For a smile they can share the night
  It goes on and on and on and on
  
  Strangers waiting, up and down the boulevard
  Their shadows searching in the night
  Streetlights people, living just to find emotion
  Hiding, somewhere in the night.)
end