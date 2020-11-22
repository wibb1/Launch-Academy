In this assignment we'll use **validations** as a way to ensure that only valid data makes its way into our database.

### Learning Goals

* Ensure data stored in our tables is valid
* Examine the effect of enforced datatypes on our code

### Setup

We'll be using a sample Sinatra application to demonstrate model validations. To download and setup the sample application, run the commands below:

```no-highlight
et get activerecord-validations
cd activerecord-validations
bundle exec bundle install
```
Next, create the database, create the schema, and seed the database:
```no-highlight
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
```

### What Are Validations?

_NOTE: We'll start by talking through some examples and will then drill down into some code-alongs later in the lesson._

**Validations** are checks we add to our applications to make sure that only valid data is saved to our database.

Validations happen at _two_ levels: the database level and the model level. **Database-level validations** are added in our migrations. For example, we might add `null: false` or uniqueness constraints to particular fields:

```ruby
class CreateGenres < ActiveRecord::Migration
  def change
    create_table :genres do |t|
      t.string :name, null: false # add null: false constraint

      t.timestamps null: false
    end

    add_index :genres, :name, unique: true # add uniqueness constraint
  end
end
```

Database-level validations are generally sufficient to prevent bad data from making its way into our database. However, they don't provide feedback to users on whether the data they've provided (in a form, for example) is valid.

We use **model-level validations** in part so that we can provide error messages to the user. ActiveRecord provides [validation helpers](http://guides.rubyonrails.org/active_record_validations.html#validation-helpers) to let us easily add validations to our models. To add constraints to our `Genre` model that check that values are non-empty and unique, we could write the following:

```ruby
class Genre < ActiveRecord::Base
  validates :name, presence: true
  validates :name, uniqueness: true
end
```

In most contexts and for the remainder of this article, we'll use the term _validation_ to refer to _model-level validations_.

#### Validation Helpers

Validation helpers provide a powerful way for ActiveRecord models to ensure that various requirements for data are met. Commonly-used validation helpers include:

* **presence** - disallows null values or empty strings for a given attribute
* **uniqueness** - ensures that only unique values are allowed for a given attribute
* **numericality** - ensures that values contain only the digits 0 through 9
* **format** - checks that values conform to a particular format using regular expressions
* **length** - checks for variety of length attributes, such as minimum, maximum,  or within a range.
* **inclusion** - checks that the value for an attribute is included in some set of pre-determined values.  For example:
```ruby
validates :day, inclusion: { in: ["Sun", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."] }
```

There are many ways to use the above helpers to validate common inputs such as emails, passwords, or zip codes. To learn more, check out the [ActiveRecord documentation](http://guides.rubyonrails.org/active_record_validations.html#validation-helpers).

#### When Do Validations Take Place?

Validations are checked on an object anytime you call one of the following ActiveRecord methods on that object:

* `create`
* `save`
* `update`
* `update_attributes`

It's possible to have validations that are run only against certain actions. For instance, if we only wanted to validate the presence of something on its creation, we could do something like:

```ruby
validates :genre, presence: true, on: :create
```

**How are validations checked?** Under the hood, ActiveRecord will call the `valid?` method on the object and will return `true` or `false` based on whether the object is valid or not. If it returns `true`, all is right with the world and ActiveRecord will save your object to the database (as long as there are no database-level validation errors).

_A cautionary note on validations_: Just because ActiveRecord reports whether an object is valid, it will not necessarily save successfully to the database. If you have database constraints that aren't met by the object you are attempting to save, then the database will raise an error.

This important but potentially confusing concept bears repeating: **Validations take place at both the application level and the database level.** The validations you set in your models - using, e.g., `validates :field_name, presence: true` - take place at the application or "model" level. Validations or constraints that you set in your migrations - e.g., `null: false` or `unique: true` - take place at the database level. Normally your model validations will mirror your database constraints (e.g. you'll have both a `NOT NULL` constraint and a presence validation), but it's important to understand there are *two* separate validation processes and occasionally one may succeed while the other fails.

#### Presence Validations and `belongs_to`
ActiveRecord makes some not-necessarily-intuitive assumptions about what it should validate when it sees a `belongs_to` relationship in the database or models. Let's say that a song `belongs_to` an album.
* On the **model level**, ActiveRecord **does assume** that a song must have a album IF you have added a `belongs_to` association to the song.
  - If you _don't_ want a song to need an album, use `belongs_to :album, optional: true`
* On the **database level**, ActiveRecord **does not assume** that a song must have an album.
  - If you *do* want a song to need an album, use `t.belongs_to :album, null: false`

**This also is true for most versions of Sinatra/ActiveRecord**. As such, adding `validates :album_id, presence: true` while using ActiveRecord with Sinatra is suggested. When working in in Rails environments (particularly Rails v5 or greater) you will not need this validation, as it will be done for you by Rails.



#### Uniqueness Validations and Race Conditions

We sometimes want a field in our database to be unique. Say, for example, we let a user add a new album to our application. We would want each album SKU to be unique, so that no two albums with the same SKU are saved to the database. This would best be accomplished with a uniqueness validation. For example, our `Albums` model would look like this:

```ruby
class Album < ActiveRecord::Base
  validates :sku, uniqueness: true
end
```

**Note:** You should not implement this example. We have not provided any SKUs in the seed file.

This uniqueness validation will ensure that ActiveRecord will only allow a SKU to be assigned to a single album in the database. However, this does not validate uniqueness at the database layer. Therefore, identical SKUs could saved to the database if a _[race condition](https://stackoverflow.com/questions/34510/what-is-a-race-condition)_ occurs, where two processes are simultaneously trying to write to the database and both complete their uniqueness check before either record gets saved to the database. A great example of race conditions as it applies to uniqueness is supplied [here](http://robots.thoughtbot.com/the-perils-of-uniqueness-validations).

To prevent a race condition from occurring, we can add an index to our database to ensure uniqueness. In the case of our `Album` class, we can add an index with the following migration:

```ruby
class AddSKUIndexToAlbum < ActiveRecord::Migration
  def change
    add_index :albums, :sku, unique: true
  end
end
```
This will ensure that the database performs a uniqueness check on the SKU. For a more detailed look at uniqueness validations and the options that are available to them, view the [uniqueness docs](http://edgeguides.rubyonrails.org/active_record_validations.html#uniqueness) for ActiveRecord.

**Note:** this is just one implementation of an index. Generally, adding an index to a column changes the way in which that column is queried and searched against. For very large datasets, an index changes the search to potentially be much faster (especially if we are searching against an integer e.g. a sku or id). However for smaller datasets, an index can potentially increase the query time. In fact, activerecord will often add an index to serial primary keys and foreign key ids because they so often used for retrieving a record. Thus, it makes sense that a *uniqueness* index is added to our unique column, because before a new album can be created, postgres needs to check all of the existing album records quickly in order to check if the new sku they wish to add does not already exist!

### Practice Time!

Open up your `Song` model in the music project. First, let's add a validation that will prevent null values from being accepted for the `:year` attribute. Add your validation in this class, such that your `Song` class looks something like this:

```ruby
class Song < ActiveRecord::Base
  validates :year, presence: true
end
```

Once this is done, open up this app in the console by typing `pry -r './server.rb'` at the terminal, and try the following:

```
s = Song.last
s.year = nil
s.save
```

What is the result? What did you expect it to be? If you now retrieve the last song record, what is the value of the year column?

You should have seen something like the following when you called `s.save`:
```
  (0.4ms)  BEGIN
  (0.3ms)  ROLLBACK
=> false
```

Now try `s.save!` to get some additional information about the failure:
```
  (0.2ms)  BEGIN
  (0.2ms)  ROLLBACK
ActiveRecord::RecordInvalid: Validation failed: Year can't be blank
```

ActiveRecord encountered your validation and refused to save the change you made that set `year` equal to `nil`. When you now retrieve the year from the last song, you should see that it is unchanged:

```
[1] pry(main)> Song.last.year
D, DEBUG -- :   Song Load (1.4ms)  SELECT  "songs".* FROM "songs"  ORDER BY "songs"."id" DESC LIMIT 1
=> 2011
 ```

**Note**: The pry console requires a restart to register changes to model classes' validations. If you make another change to the validations in your `Song` class, you'll need to restart the pry console to see them take effect.

Provide a value for the year column and try to save the song. Test what happens with values that are strings. What about the integer zero?

Now let's modify our validation to ensure that only 4-digit years are allowed. Try adding this to your `Song` class:

```ruby
validates :year, numericality: true, length: { is: 4 }
```

Test your `Song` class again, this time by entering a year in the form **1977**. What happens if you actually type an extra digit and try to save? What happens if you enter the year in abbreviated form, i.e. **77**? Does this align with your expectations?

Let's say we also want to allow 2-digit years. We can replace the `is: 4` clause in our `length` validation with `minimum: 2, maximum: 4`.

Restart the console and test again. What do you find with short year formats?

---

This demonstrates that validations can have multiple conditions that must be met for the record to be valid. At times, we may not be certain that we've met those conditions prior to trying to save. Also note, if you call `valid?` directly on an object, ActiveRecord will not try to save it to the database but will instead return true or false based on the result of running the validations against the object. We can also call the `errors` method on a record prior to saving to list any errors raised by our validations.

**Quick Challenge:** With a new song, using `new`, not `create`, set a value for the year that is invalid. Prior to saving, call the `valid?` method on your song. What do you learn? How might this be useful?

**Note**: Validations can become quite complex. At times, including `valid?` checks on your new objects can be a useful way to branch to code that deals with this condition.

**Note**: The ActiveRecord `create` methods calls the `new` and `save` methods. Separating `new` and `save`, instead of using `create`, allows the management of error conditions that could cause the creation of a new record to fail. This is a result of the ORM characteristic of separating the representation from the record in the database it represents.

In our example above, we focused on the length of a year. This is a well-defined condition: in normal use we can be pretty certain that we won't encounter years that are 5 digits long and it's standard to require 4-digit years. In a recorded songs database these conditions are pretty much certain to be true.

**Quick Challenge:** The ActiveModel class provides validation helpers. Can you find a way to refactor our `minimum: x, maximum: y` syntax to something more terse? Refer to the documentation for ActiveModel's validation helpers.

**Quick Challenge:** Rewrite the `Song` model to include validations for all of the fields that you have included (i.e., not the columns that ActiveRecord provided on its own such as timestamps). Use the example of the `year` column as a starting point. For the string fields, set limits on minimum and maximum length that you think will be reasonable. Ensure that the value given for years is a number. Consider what you might do if a user tries to add a record without knowing some information, e.g. the label of the album.

**Hint**: You cannot complete this without reference to the appropriate documentation for ActiveRecord.

### External Resources

* [ActiveRecord Validations - RailsGuides](http://guides.rubyonrails.org/active_record_validations.html)
* [Rails Documentation on Validations](http://api.rubyonrails.org/classes/ActiveModel/Validations.html)

### In Summary

The ActiveRecord validation process and the accompanying validation helpers are the primary way to ensure that your data maintains integrity. Consistent data across many records allows simpler, easier to maintain code. Uniqueness validations are an important edge case to be mindful of, and creating indexes helps enforce data consistency.
