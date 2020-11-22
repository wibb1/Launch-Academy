It's your first day at the links!

## Getting Started

```no-highlight
et get laser-advisor
cd laser-advisor
code .
```

### Instructions

In space exploration, distances between you and various items can be hard to calculate. When your ship approaches a piece of space flotsam, you need to quickly determine which laser you can use to reach the item and neutralize it.

Your combat systems officer has given you the following table, which represents the laser you should use based on your distance from the space item, in yards.

```no-highlight
blaster 200
helium neon 180
nuclear pumped 170
krypton 170
co2 160
coil 150
strontium vapor 140
ruby 130
xenon ion 120
free electron 110
gas dynamic 95
nitrogen 0
```

Using the above table of information build a data structure that makes the most sense to you. (An array, a hash?) Using that structure, and your current distance from the item, you can determine what laser to deploy.
The yardage represented in the table is the ***lowest*** distance you will reach using that laser.
For example, if you are 115 yards from the item, you should use a free electron laser.
If you use a gas dynamic laser, your beam will not be long enough.
If you use a xenon laser, you will shoot ***over*** the item and potentially destroy something else, which would be terrible.

As another example, if you are 168 yards from the space flotsam, you should shoot a CO2 laser to ensure the closest shot.

Write a program, given a user-supplied distance, that tells you which laser you should use. Using `.gsub` might help!

Example Output:

```no-highlight
How far away are you?
#> 155

Use the coil laser!
```

{% show_hint %}
```ruby
"#{laser.to\_s.gsub("\_", " ")}!"
```
{% endshow_hint %}
