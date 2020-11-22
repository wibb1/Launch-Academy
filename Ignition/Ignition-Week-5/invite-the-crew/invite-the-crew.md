It's time to plan your upcoming flight.

## Getting Started

```no-highlight
et get invite-the-crew
cd invite-the-crew
touch code.rb
code .
```

### Instructions

In order to be sure the flight crew is aware of their upcoming trip and respective responsibilities, you want to reach out and email them. The problem is, you can't remember their email addresses! You know you have it lying around in a hash somewhere. Oh, wait, here it is!

```ruby
crew_contacts = {
  jose: 'workerNaut@example.com',
  samantha: 'spaceFlightRacer@example.com',
  talia: 'pro_space89@example.com',
  mike: 'alwaysAtTheHelm@example.com',
  olivia: 'maintainingMaintenance@example.com',
  joan: 'bestNavigatorEver@example.com'
}
```

Use the `crew_contacts` hash to invite Samantha, Talia, and Olivia to your upcoming flight via email.

Fill out the "To:" line of your email. In order to do so, you'll have to find the relevant email addresses, and put all of the email addresses in a string separated by commas.

For an extra challenge, try completing this challenge in a single line of text, instead of breaking it up into multiple lines! How do you feel about this new version? Is it easier to read? Writing good code is always a balance between a solution with fewer lines and code that is easy for you and other developers to read, today and many days from today! Which version would you use?

Example Output:

```no-highlight
spaceFlightRacer@example.com, pro_space89@example.com, maintainingMaintenance@example.com
```

{% show_solution %}
```ruby
crew_contacts = {
  jose: 'workerNaut@example.com',
  samantha: 'spaceFlightRacer@example.com',
  talia: 'pro_space89@example.com',
  mike: 'alwaysAtTheHelm@example.com',
  olivia: 'maintainingMaintenance@example.com',
  joan: 'bestNavigatorEver@example.com'
}

puts [crew_contacts[:samantha], crew_contacts[:talia], crew_contacts[:olivia]].join(', ')
```

```ruby
invites = [:samantha, :talia, :olivia]

	invites.each do |email|
	  print "#{crew_contacts[email]}"
	  if email != invites.last
	    print ", "
	  end
	end
```
{% endshow_solution %}
