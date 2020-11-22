_Space, the final frontier. These are the voyages of Launch Academy. Its ongoing mission: to explore strange new technologies. To learn new frameworks and new languages. To boldly build apps that no one has built before._

Launch Academy central command has put you in charge of creating an application that helps us organize starships and crew members by applying your knowledge of ActiveRecord and Sinatra.

### Learning Goals

**See how the components of a database-backed web app fit together.** ActiveRecord Migrations, Associations, and Validations (all of which you'll be covering this week!) are all used in the context of building a broader web application. You will also see how ActiveRecord models work with your Sinatra server and views.

**Walk through the app-planning process.** ER diagrams and database relationships form the foundation of your application. It's important to deliberately plan what tables/models are needed and how they will be related to one another. ActiveRecord is simply a tool for implementing these database relationships.

**Understand the importance of acceptance testing.** The requirements for this challenge are presented as user stories and acceptance criteria. Use them to build your acceptance tests!

### Getting Started

To get started, run:

```no-highlight
et get star-fleet
cd star-fleet
bundle install
```

Next, run the following command to create your database:

```no-highlight
rake db:create
```

We can create the database with that simple command because of the information stored in `config/database.yml`!

## Introduction

Use the user stories and acceptance criteria below to guide you as you build an application that that allows a user to

- view the current collection of starships as well as individual starship "show" information and create new starships
- create and view the crew members who will be assigned to a given ship (a crew member can only be assigned to one ship at a time)

Your primary focus should be on creating the appropriate database schema, routes, and ActiveRecord CRUD operations to view ships in the Sinatra application.

Part 2 introduces the `crew_members` table, which will first require you to learn about ActiveRecord Associations so that you can set up your schema properly. **Do not begin Part Two until you have completed Part One**.

### Plan of Attack

1. Read through all user stories for a rough idea of the app
2. Think about how each user story of the assignment affects your ER diagram (which you'll use to create a schema for your database). Specifically, you'll need to plan out what tables you need and which columns each table should have. Use a tool like [draw.io](https://www.draw.io/) or pencil/paper to create an ER diagram for your schema.
3. Create and run the migrations required to set up your database.
4. Create a related ActiveRecord model in `app/models` for each table so that you can use ActiveRecord CRUD methods to access your data. These models are accessible in your `server.rb` file, allowing you to assign instances of these objects to instance variables for use in your ERB templates.

**You should be running `rake db:test:prepare` after every migration.** This command will ensure your test database is up to date with your development database

## User Stories

### Core User Stories

Each section contains user stories and acceptance criteria, with further instructions at the top of the section.

#### Part 1: Viewing and Creating Starships

_Use ActiveRecord to query your database, and then use the returned objects to display information on your `erb` pages._

```no-highlight
As an admiral in the star fleet
I want to view a list of all starships exploring the galaxy
So that I can make strategic plans that ensure the safety and wellbeing of all
```

Acceptance Criteria:

- If I go to the root path, I should be redirected to `/starships`.
- On the starships index page at `/starships`, I should see the name of each starship.
- The starships should be retrieved from my database.

```no-highlight
As a star fleet admiral
I want to view the details of a starship
So that I can learn more about its ongoing mission
```

Acceptance Criteria:

- On the starships index page, the name of each starship should be a link to the starship's show page.
- On the show page, I should see the name, ship class, and location of the starship.

```no-highlight
As a star fleet admiral
I want to create a starship
So that I can deploy it in order to serve my galactic interests
```

Acceptance Criteria:

- There should be a link from the starships index page that takes you to the starships new page. This page contains a form to create a new starship.
- I must supply a name, ship class, and location of the starship.
- If the form submission is successful, I should be brought to the starship's show page, and I should see a message that lets me know that I have created a starship successfully.
- If the form submission is unsuccessful, I should remain on the starships new page. The form should be pre-filled with the values that were provided when the form was submitted.

#### Part 2: Viewing and Creating Crew Members

##### Instructions

- Do not begin until you have read material regarding _ActiveRecord Associations_ and ideally _ActiveRecord Migrations_.
- Re-evaluate your ER diagram from before, and determine how your new `crew_members` table will be related to the `starships` table
- You may need to create a migration to update your database schema to allow for the proper association!

##### User Stories

```no-highlight
As a starship commodore
I want to view a list of all of crew members of all ships
So I can plan starship staffing
```

Acceptance Criteria:

- On the crew members index page at `/crew-members`, I should see the first name, last name, and specialty division of each of my crew members.
- Crew members should be listed alphabetically by last name.

```no-highlight
As a star fleet admiral
I want to add new crew members to a ship
So that I can properly staff my starships
```

Acceptance Criteria:

- **The starship show page** has a form to create a new crew member **for that starship**. (The form must be _on_ the page!)
- I must supply a first name, last name, and specialty division for my crew member.
- If the form submission is successful, I should be brought back to the crew members index page, and I should see a message that lets me know that I have created a crew member successfully.
- If the form submission is unsuccessful, I should remain on the crew members new page. _Ideally, the form should be pre-filled with the values that were provided when the form was initially submitted._

#### Part 3: Validations and Error Handling

##### Instructions

- Decide what (if any) validations each column in your database should have for incoming data. Use [change_column](http://edgeguides.rubyonrails.org/active_record_migrations.html#changing-columns) to add these database-level validations. Note that `change_column` uses the following syntax:

```
change_column table_name, column_name, column_type, constraints
```

For example, if I am adding a `null: false` constraint to my `name` column in a `songs` table, my migration might look like this:

```ruby
class AddNullFalseToSongsName < ActiveRecord::Migration
  def up
    change_column :songs, :name, :text, null: false
  end
  def down
    change_column :songs, :name, :text
  end
end
```

Note how `up` and `down` are used here for `change_column` rather than `change` - this is because `change_column` is something that cannot be rolled back automatically, meaning that it's up to us to explicitly state what should happen during a rollback.

- For each constraint you created in your database, create a corresponding validation in your model for that table.
- Use the validation error messages stored on your object that has failed to persist to the database to help you generate errors on the webpage, e.g., `Song.errors.full_messages`
- When you're done with both these steps, finish the [core user stories][core-user-stories] provided below.

##### User Stories

```no-highlight
As a starship planner
I want to receive error messages on my new starship form
So I know why my new starship is not submitting
```

- All of the starship attributes should be required when creating a new starship.
- If the new starship form submission is unsuccessful (if a user omits a field), I should remain on the new starships page. The form should still be filled with the values that were provided when the form was previously submitted (this is already happening as a part of a prior story).
- I should see error messages explaining why the form submission was unsuccessful.

```no-highlight
As a starship planner
I want to receive error messages on my new crew member form
So that I know why I am not able to add my crew member
```

Acceptance Criteria:

- If the new crew member form submission is unsuccessful, I should remain on the starship show page where the new crew member form lives. The form should be filled with the values that were provided when the form was last submitted (this is already happening as a part of a prior story).
- First name and last name should be required when creating a new crew member, but specialty division is optional.
- I should see error messages explaining why the form submission was unsuccessful.

### Tips

If using the [Post/Redirect/Get pattern](http://en.wikipedia.org/wiki/Post/Redirect/Get) you'll often need to pass messages along with a redirect (e.g. notifying a user what happened this round). These are called **flash messages** and are implemented using the session to store a temporary message that is wiped out after one request. You can find some information on how to get them set up in a Sinatra app [here](https://gist.github.com/cmkoller/0d3b048b3c4b48ee4955).

#### Part 4: Simulations (Testing your Starship)

##### Instructions

Now that you have completed your shipyards and recruited your crew members Star Fleet Command has instructed you to make sure that they are spaceworthy and that all systems function within acceptable parameters.

- Revisit the user stories above. Write acceptance tests for each story. Use the acceptance criteria to inform your tests what will be considered passing.
- Work on satisfying one piece of acceptance criteria before moving onto the next. This will force you to do some refactoring of a test you just wrote. This is an important piece of the testing process, especially as you learn more about TDD.

You can run your tests with the `rspec` command.

### Optional User Stories

**PLEASE DO NOT START THESE STORIES UNTIL YOU HAVE FINISHED THE CORE USER STORIES**

```no-highlight
As a starship planner
I want to change my starship's details
So that the fleet has all of the most up-to-date information on the starship
```

Acceptance Criteria:

- For each of my starships, there should be a link from the starship's show page that takes you to the starship's edit page. On this page there is a form to edit the starship, and it is pre-filled with the starship's details.
- I must supply a name, location, and ship class.
- If the form submission is successful, I should be brought to the starship's show page, and I should see a message that lets me know that the starship has been successfully updated.
- If the form submission is unsuccessful, I should remain on the starship's edit page, and I should see error messages explaining why the form submission was unsuccessful. The form should be pre-filled with the values that were provided when the form was submitted.

```no-highlight
As a starship creator
I want to decomission my starship
So that it can be retrofitted or scrapped
```

Acceptance Criteria:

- There should be a delete button on the starship's show page.
- If I click on the delete button, the starship should be deleted and I should be redirected to the starships index page. Also, all of the starship's crew members should be deleted as well.

### External Resources

- [Active Record Basics][active-record-basics]
- [Active Record Migrations][active-record-migrations]
- [Active Record Query Interface][active-record-query-interface]
- [Active Record Associations][active-record-associations]
- [Active Record Validations][active-record-validations]

[active-record-basics]: http://guides.rubyonrails.org/active_record_basics.html
[active-record-migrations]: http://guides.rubyonrails.org/active_record_migrations.html
[active-record-query-interface]: http://guides.rubyonrails.org/active_record_querying.html
[active-record-associations]: http://guides.rubyonrails.org/association_basics.html
[active-record-validations]: http://guides.rubyonrails.org/active_record_validations.html
[has-many-through]: http://guides.rubyonrails.org/association_basics.html#the-has-many-through-association
