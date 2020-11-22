def average(input)
  input.sum.to_f / input.length
end

shuvver = [260, 483, 792, 357, 546]
zhook = [186, 223, 173, 297, 303]
nanoship = [646, 883, 761, 932, 778]

puts "The Shuvver Ship's average is: #{average(shuvver)}"
puts "The Zhook Cruiser's average is: #{average(zhook)}"
puts "The Nanoship's average is: #{average(nanoship)}"

def mileage_rating(average)
  if average < 250
    "F - Use this ship as a last resort! We aren't made of money."
  elsif average < 500
    "D"
  elsif average < 750
    "C"
  elsif average < 1000
    "B"
  else
    "A"
  end
end

shuvver_rating = mileage_rating(average(shuvver))
zhook_rating = mileage_rating(average(zhook))
nanoship_rating = mileage_rating(average(nanoship))

puts ("Shuvver rating: #{shuvver_rating}")
puts ("Zhook Cruiser rating: #{zhook_rating}")
puts ("Nanoship rating: #{nanoship_rating}")

ships = ["Nanoship", "Shuvver", "Snacky Cabs", "Resisty's Ship", "Zhook Cruiser"]

def rankings(ships)
  ships.each_with_index do |ship, rank|
    puts "#{rank + 1}. #{ship}"
  end
end

rankings(ships)