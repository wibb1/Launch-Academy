crew_contacts = {
  jose: 'workerNaut@example.com',
  samantha: 'spaceFlightRacer@example.com',
  talia: 'pro_space89@example.com',
  mike: 'alwaysAtTheHelm@example.com',
  olivia: 'maintainingMaintenance@example.com',
  joan: 'bestNavigatorEver@example.com'
}

values = []
email = [:samantha, :talia, :olivia]
email.each do |value|
  values << crew_contacts[value]
end
puts values.join(",")