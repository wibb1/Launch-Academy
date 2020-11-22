# Your code, here.
donations=0.00
donation=0.00
puts "Enter your values here!"
while donations < 100
  donation = gets.chomp.to_f
  donations = donation + donations
  end
puts "You've reached 100!"
remainD = ((donations - 100)/25).to_i
remainD.times {puts "You've earned another 25!"}

