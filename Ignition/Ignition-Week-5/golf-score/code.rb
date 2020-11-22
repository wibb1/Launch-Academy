course = [
{"par" => 5, "score" => 7},
{"par" => 4, "score" => 5},
{"par" => 3, "score" => 3},
{"par" => 4, "score" => 4},
{"par" => 4, "score" => 4},
{"par" => 3, "score" => 2},
{"par" => 4, "score" => 5},
{"par" => 5, "score" => 5},
{"par" => 4, "score" => 5},
{"par" => 5, "score" => 7},
{"par" => 4, "score" => 4},
{"par" => 4, "score" => 4},
{"par" => 3, "score" => 3},
{"par" => 4, "score" => 5},
{"par" => 4, "score" => 5},
{"par" => 4, "score" => 4},
{"par" => 3, "score" => 3},
{"par" => 5, "score" => 6}
]
total_par = 0
total_strokes = 0
course.each do |i|
  total_par += i["par"]
  total_strokes += i["score"]
end
puts "Total Strokes: #{total_strokes}"
puts "Total Par : #{total_par}"
if total_strokes > total_par
  puts "You were #{total_strokes-total_par} over par."
elsif total_strokes < toatal_par
  puts "You were #{total_par - total_strokes} under par."
else
  puts "You made par."
end
