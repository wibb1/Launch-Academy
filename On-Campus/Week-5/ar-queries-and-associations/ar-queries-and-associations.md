Our brussels sprouts recipe blog needs a major makeover -- let's use ActiveRecord to model our new blog!

### Learning Goals

* Create a multi-table application
* Explore ways to associate tables
* Use a foreign key column

### Setup

```no-highlight
et get ar-queries-and-associations
cd ar-queries-and-associations
bundle exec bundle install
bundle exec rake db:create
```

### Instructions
We want our blog to have many recipes, each of which can have many comments.

#### Models and Tables
* Create a `Recipe` model and associated migration. Create whatever columns you deem necessary (no need to include ingredients).
* Create a `Comment` model and associated migration. Create whatever columns you deem necessary.
* Associate the two tables so that each recipe can have multiple comments.
* Load up your pry by running `pry -r ./server.rb`. Create 5 recipes with 1-5 comments each.

#### Queries
In a `README.md` file, indicate how you would use ActiveRecord to return...
  1. all the recipes
  * all the comments
  * the most recent recipe posted
  * all the comments of the most recent recipe
  * the most recent comment of all your comments
  * the recipe associated with the most recent comment
  * all comments that include the string `brussels`
