
data = [
  {First_Name: "Jon", Last_Name: "Smith", Age: 25, Income: 50000, Household_Size: 1, Gender: "Male", Education: "College"},
  {First_Name: "Jane", Last_Name: "Davies", Age: 30, Income: 60000, Household_Size: 3, Gender: "Female", Education: "High School"},
  {First_Name: "Sam", Last_Name: "Farelly", Age: 32, Income: 80000, Household_Size: 2, Gender: "Unspecified", Education: 'College'},
  {First_Name: "Joan", Last_Name: "Favreau", Age: 35, Income: 65000, Household_Size: 4, Gender: "Female", Education: "College"},
  {First_Name: "Sam", Last_Name: "McNulty", Age: 38, Income: 63000, Household_Size: 3, Gender: 'Male', Education: 'College'},
  {First_Name: "Mark", Last_Name: "Minahan", Age: 48, Income: 78000, Household_Size: 5, Gender: 'Male', Education: 'High School'},
  {First_Name: "Susan", Last_Name: "Umani", Age: 45, Income: 75000, Household_Size: 2, Gender: 'Female', Education: "College"},
  {First_Name: "Bill", Last_Name: "Perault", Age: 24, Income: 45000, Household_Size: 1, Gender: 'Male', Education: "Did Not Complete High School"},
  {First_Name: "Doug", Last_Name: "Stamper", Age: 45, Income: 75000, Household_Size: 1, Gender: 'Male', Education: "College"},
  {First_Name: "Francis", Last_Name: "Underwood", Age: 52, Income: 100000, Household_Size: 2, Gender: 'Male', Education: "College"}
]
sum_age = 0.00
sum_house = 0.0
sum_income = 0.0
cCol = 0.0
cDNF = 0.0
cFemale = 0.0
cHigh = 0.0
cMale = 0.0
cUnS = 0.0
length = data.length
pCal = 100 / length
data.each do |i|
  sum_age += i[:Age]
  sum_house += i[:Household_Size]
  sum_income += i[:Income]
  if i[:Gender] == "Female"
    cFemale += 1
  elsif i[:Gender] == "Male"
    cMale += 1
  else
    cUnS += 1
  end
  if i[:Education] == "College"
    cCol += 1
  elsif i[:Education] == "High School"
    cHigh += 1
  else 
    cDNF += 1
  end
end
puts "Average Age: #{sum_age / length}"
puts "Average Income: #{sum_income / length}"
puts "Average Houshold Size: #{sum_house / length}"
puts "Female %: #{cFemale * pCal}"
puts "Male %: #{cMale * pCal}"
puts "Unspecified Gender %: #{cUnS * pCal}"
puts "College %: #{cCol * pCal}"
puts "High School %: #{cHigh * pCal}"
puts "Did Not Finish High School %: #{cDNF * pCal}"