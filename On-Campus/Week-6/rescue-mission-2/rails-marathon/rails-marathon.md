# Let's Create a Site for Houses!

No, not houses like you see on the street. Houses like you find in fantasy fiction! Whether it's the Hogwarts Houses in Harry Potter, or the Great Houses of Westeros in Game of Thrones, fantasy is full of houses, and lots of people in them. So let's make an app to help us keep them all straight.

# Things to Think About
- ER Diagrams
- What models should we have?
- What is the relationship between them?

## To Begin
- `et get rails-marathon`, `cd rails-marathon`, `bundle install`
- Create the databases `bundle exec rake db:create`
- Run `bundle exec rspec`

## Hints
- Don't forget to add flash message functionality in your layout to help display errors, something like this before the yield
```ruby
<% flash.each do |key, value| %>
    <%= value %>
<% end %>
```
Or using the code provided in the [Ruby on Rails Validation Errors Docs](http://edgeguides.rubyonrails.org/active_record_validations.html#displaying-validation-errors-in-views)
- **Let the tests guide your code!** This will be particularly important to understanding what should go on which page.
- An occasional sanity check of `rake db:test:prepare` couldn't hurt

## App Functionality
- A house has to have a name, the source material it's from (i.e. the Harry Potter books), and an author for that source material. It can optionally have a motto.
- Visiting the `/houses` path should contain a list of houses.
- Visiting the `/houses/new` path should display a form for adding a new house.
- If an house is saved I should see the new house I've added, and if it is not saved I'm left on the `/new` page and displayed an error.
- Visiting a specific house's page should display information about that house
- Visiting the root path should display a list of all houses.

Once I have this set up I want to give visitors of my app the ability to add members they've learned about who belong to that house. Specifically I want my app to satisfy the following criteria:

- A house can have many members. Each member must be for a specific house, and have a first name, last name, and a timestamp for when they were added to the database.
- A member can only belong to one house, any members in this app must be associated to a house.
- From the new house member form page, I can add members by specifying a first and last name.
- If a member is saved, I'm redirected to the show page of the house the member belonged to, if it is not saved, I should be left on the new house member form page and render errors associated with the member.
- Visiting a specific house's page should also include all of the members for a house listed below the house information
