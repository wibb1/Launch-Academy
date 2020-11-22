It's going to be another great space adventure! (If you're into that sort of thing.)

## Getting Started

```no-highlight
et get the-right-crew
cd the-right-crew
code .
```

### Instructions

In order to prepare for our trip, we need to trim down the number of crew members on this test flight to 6. Because we don't want to play favorites, we will randomize our selection.

We DO need to ensure the bag always contains a captain, a navigator, and a lead maintenance position.

Write a program that randomizes your crew selections, informs you of their configuration, and also tells you if your selection contains the required crew members.

Start with the code below:

```ruby
REQUIRED_CREW_SIZE = 6

available_crew = [
  :captain,
  :first_mate,
  :second_mate,
  :navigator,
  :first_engineer,
  :info_systems_tech,
  :environmental_control_tech,
  :lead_maintenance,
  :first_medical,
  :first_food_ops,
  :combat_systems_officer
]

possible_crew_selections = available_crew.sample(REQUIRED_CREW_SIZE)
```

Write code to check your `available_crew` against the requirements and show the results of these checks in the terminal.

Here's an example of what your output might look like:

```no-highlight
***Automated Flight Crew Advice:***
Bring your captain!
Bring your combat systems officer!
Bring your second mate!
Bring your first medical!
Bring your lead maintenance!
Bring your first mate!

WARNING! You will be without the lead maintenance role!
WARNING! You will be without the navigator role!
```

{% show_hint %}

* Because we want a friendly name for each crew member,
  you will probably need to change your crew roles from symbols to another data type. **You will want to look into methods that can transform symbols to something else.**
* `gsub` is a common method found on Strings that allows you to swap out pieces of a string for other pieces. Check out the [Ruby Docs](http://ruby-doc.org/core-2.3.0/String.html#method-i-gsub) for more information!
{% endshow_hint %}

{% show_solution %}
A possible solution:

```ruby
REQUIRED_CREW_SIZE = 6

available_crew = [
  :captain,
  :first_mate,
  :second_mate,
  :navigator,
  :first_engineer,
  :info_systems_tech,
  :environmental_control_tech,
  :lead_maintenance,
  :first_medical,
  :first_food_ops,
  :combat_systems_officer
]

possible_crew_selections = available_crew.sample(REQUIRED_CREW_SIZE)

puts "\*\*\*Automated Flight Crew Advice:\*\*\*"

possible_crew_selections.each do |selection|
  puts "Use the #{selection.to\_s.gsub("\_", " ")}!"
end

puts ""

[
  :captain,
  :navigator,
  :lead_maintenance
].each do |required_crew|
  if !possible_crew_selections.include?(required_crew)
    puts "WARNING! You will be without a #{required_crew.to\_s.gsub("\_", " ")}"
  end
end

```

Here's another interesting solution, using array math to determine missing, but required crew members.

```ruby
REQUIRED_CREW_SIZE = 6

available_crew = [
  :captain,
  :first_mate,
  :second_mate,
  :navigator,
  :first_engineer,
  :info_systems_tech,
  :environmental_control_tech,
  :lead_maintenance,
  :first_medical,
  :first_food_ops,
  :combat_systems_officer
]

possible_crew_selections = available_crew.sample(REQUIRED_CREW_SIZE)

puts "\*\*\*Automated Flight Crew Advice:\*\*\*"

possible_crew_selections.each do |selection|
  puts "Use the #{selection.to\_s.gsub("\_", " ")}!"
end

puts ""

REQUIRED_CREW = [:captain, :navigator, :lead_maintenance]

missing_required_crew = REQUIRED_CREW - possible_crew_selections
missing_required_crew.each do |required_crew|
  puts "WARNING! You will be without a #{required_crew.to\_s.gsub("\_", " ")}"
end
```
{% endshow_solution %}
