# YOUR CODE GOES HERE
dinner_total = 178
tip = 0.20
tip_total = format("%.2f", tip * dinner_total)
dinnerNTip = format("%.2f", dinner_total * (1 + tip))
puts "the total is $#{dinnerNTip}"
puts "You should tip $#{tip_total}"
