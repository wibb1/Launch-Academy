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

# YOUR CODE GOES BELOW
# required to have capitan, navigator and lead_maintenance
required = [:captain, :lead_maintenance, :navigator,
]
#generate random numbers without repeating - would be better to feed the required members into the array then generate a random number for the remaining crew

puts "\n***Automated Flight Crew Advice?:***"
possible_crew_selections.each do |i|
  puts "Bring your #{i.to_s.gsub("_", " ")}!"
end
puts ""
difference = required - possible_crew_selections
difference.each do |i|
  puts "WARNING! You will be without the #{i.to_s.gsub("_", " ")}!"
end 


