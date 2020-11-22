require 'pry'
vote_results =
  {
    "Precinct 1" => {
      'Mary Sue' => 218,
      'Sally Jane' => 455,
      'Billy Joe' => 185
    },
    "Precinct 2" => {
      'Mary Sue' => 229,
      'Sally Jane' => 41,
      'Billy Joe' => 35
    },
    "Precinct 3" => {
      'Mary Sue' => 297,
      'Sally Jane' => 423,
      'Billy Joe' => 488
    },
    "Precinct 4" => {
    'Mary Sue' => 283,
    'Sally Jane' => 171,
    'Billy Joe' => 353
    }
  }
question = 1
# 1) Generate the voting totals by Precinct and Candidate as shown in the directions.
puts "#{question})"
vote_results.each_key do |i|
  puts "**In #{i}**"
  vote_results[i].each do |k,v|
    puts "-#{k} got #{v} votes"
  end
  puts
end
question += 1
  # 2) How many people voted in each precinct? Create a new hash where the keys name the precinct and the values start at 0. Iterate over the provided `vote_results` to update the totals.
puts "#{question})"
precinct_tally = {
  "Precinct 1" => 0,
  "Precinct 2" => 0,
  "Precinct 3" => 0,
  "Precinct 4" => 0
}
vote_results.each_key do |i|
  precinct_votes = 0
  vote_results[i].each do |k,v|
    precinct_votes += v
  end
  precinct_tally[i] = precinct_votes
end
precinct_tally.each do |k,v|
  puts "#{k} had #{v} votes." 
end
question += 1
# 3) Which precinct had the highest voter turnout? Use the hash you created in Question 2 to return the answer.
puts "#{question})"
maxk = 0
maxv = 0
precinct_tally.each do |k,v|
  if v > maxv
    maxk = k
    maxv = v
  end
end
puts "#{maxk} had the most votes with #{maxv} votes."
question += 1
# 4) Output the total number of votes per candidate in the format seen above. Create a new hash where the keys name the candidate and the values start at 0. Iterate over the provided `vote_results` to update the totals.
puts "#{question})"
candidate_tally = {
  "Mary Sue" => 0,
  "Sally Jane" => 0,
  "Billy Joe" => 0
}
vote_results.each_key do |i|
  vote_results[i].each do |j,k|
    candidate_tally[j] += k
  end
end
  candidate_tally.each do |k,v|
puts "#{k} had #{v} votes"
end
question += 1
# 5) Who was the winning candidate in Precinct 4 and how many votes did they get?
puts "#{question})"
p4_winner = vote_results["Precinct 4"].values.max
puts "#{vote_results["Precinct 4"].key(p4_winner)} won Precinct 4 with #{p4_winner} votes."
question += 1
# 6) How many people voted in total?
puts "#{question})"
total_votes = 0
candidate_tally.each_value do |v|
  total_votes += v
end
puts "In total, #{total_votes} people voted."
question += 1
# 7) Who won the election and how many votes did they get? Use the hash you created in Question 4 to return the answer.
puts "#{question})"
winner = candidate_tally.values.max
puts "#{candidate_tally.key(winner)} had the most votes with #{winner} votes."
question += 1
# 8) How many more votes did the winner have as compared to the third place candidate? Use the hash you created in Question 4 and the winning candidate total votes value from Question 7 to complete this question.
puts "#{question})"
last_place = candidate_tally.values.min
puts "#{candidate_tally.key(winner)} beat #{candidate_tally.key(last_place)} by #{winner-last_place} votes."