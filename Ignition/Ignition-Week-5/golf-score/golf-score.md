That's a wrap! You've completed your first round of golf,
and now it's time to tabulate your score!

## Getting Started
```no-highlight
et get golf-score
cd golf-score
code .
```

### Golf Score Tabulator

In the game of golf, you count how many times you hit the ball per hole,
and that makes up your score. Each hole has a par value,
or a guess at how many times you should hit the ball for any given hole.

For every hole, you can either be under par, at par, or over par.
For example, if you scored a 5 on a par 4 hole, you are one **over** par.
If you scored a 2 on a par 3 hole, you are one **under** par.

Here's how you did:

```no-highlight
Hole 1 (Par 5): 7
Hole 2 (Par 4): 5
Hole 3 (Par 3): 3
Hole 4 (Par 4): 4
Hole 5 (Par 4): 4
Hole 6 (Par 3): 2
Hole 7 (Par 4): 5
Hole 8 (Par 5): 5
Hole 9 (Par 4): 5
Hole 10 (Par 5): 7
Hole 11 (Par 4): 4
Hole 12 (Par 4): 4
Hole 13 (Par 3): 3
Hole 14 (Par 4): 5
Hole 15 (Par 4): 5
Hole 16 (Par 4): 4
Hole 17 (Par 3): 3
Hole 18 (Par 5): 6
```

Utilize compound data structures to calculate your score.

Here's what the sample output to your terminal might look like (for the data above):

```no-highlight
Total Strokes: 81
Total Par: 72
You were 9 over par.
```

Your tabulation program should work for **any golf scorecard**,
so be sure to play with different values to ensure your
program works correctly!

{% show_hint %}
* Use an array of hashes where each hash represents the par value
  and score of a given hole
{% endshow_hint %}

{% show_solution %}
```ruby
game_results = [
  { par: 5, score: 7 },
  { par: 4, score: 5 },
  { par: 3, score: 3 },
  { par: 4, score: 4 },
  { par: 4, score: 4 },
  { par: 3, score: 2 },
  { par: 4, score: 5 },
  { par: 5, score: 5 },
  { par: 4, score: 5 },
  { par: 5, score: 7 },
  { par: 4, score: 4 },
  { par: 4, score: 4 },
  { par: 3, score: 3 },
  { par: 4, score: 5 },
  { par: 4, score: 5 },
  { par: 4, score: 4 },
  { par: 3, score: 3 },
  { par: 5, score: 6 }
]

total_score = 0
total_par = 0

game_results.each do |hole_hash|
  total_score += hole_hash[:score]
  total_par += hole_hash[:par]
end

puts "Total Strokes: #{total_score}"
puts "Total Par: #{total_par}"

par_value = total_score - total_par

term = ""
if par_value >= 0
  term = "over"
else
  term = "under"
  par_value = par_value * -1
end

puts "You were #{par_value} #{term} par."
```
{% endshow_solution %}
