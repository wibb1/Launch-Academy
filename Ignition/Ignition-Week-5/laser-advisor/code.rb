# your code, here
laser_yards = {
  "blaster" => 200,
  "helium_neon" => 180,
  "nuclear_pumped" => 170,
  "krypton" => 170,
  "co2" => 160,
  "coil" => 150,
  "strontium_vapor" => 140,
  "ruby" => 130,
  "xenon_ion" => 120,
  "free_electron" => 110,
  "gas_dynamic" => 95,
  "nitrogen" => 0
}
x = rand(1..200)
y = rand(1..200)
z = rand(1..200)
targeting = Math.sqrt((x*x)+(y*y)+(z*z))
laser_range = laser_yards.invert

items = ["asteroid", "pile of space junk", "comet"]
item = items[rand(0..2)]

puts "The targeting system has alerted us of a nearby #{item}."
puts "Enter distance to target, or press enter for auto targeting"

user_input = gets.chomp.to_i
if user_input > 0
  target_distance = user_input 
else
  target_distance = targeting.to_i
  puts target_distance
end

laser_array = laser_yards.select { |key, value| value >= target_distance}
laser = laser_array.keys.last
if target_distance > 250
  puts "What are you worried about? We've got time. We aren't even in range yet."
elsif target_distance > 180
  puts "Computer selecting blaster to engage."
else  
  puts "Computer seleting #{laser.to_s.gsub("_", " ")} laser to engage." 
end
