## News Aggregator: PostgreSQL Style

Reading and writing CSV files works for small applications, but if we want the News Aggregator we worked on previously to take over the world, we're going to need something a little more heavy-duty. Let's redesign our persistence layer so that we're reading from and writing to a PostgreSQL database rather than directly to a file.

### Learning Objectives

* Define a database schema to store user-submitted articles.
* Read from and write information to a PostgreSQL database from a Sinatra application.

#### Getting Started

```no-highlight
$ et get news-aggregator-postgresql
$ cd news-aggregator-postgresql
$ bundle
```

### Instructions
In this web application, we will be satisfying all of the core user stories from [News Aggregator Plus](https://learn.launchacademy.com/lessons/news-aggregator-plus). Specifically, we want a page where a user can review the articles they have stored on the application, and a page to add new articles. However, rather than use a CSV to persist our article data, we will use a PostgreSQL database.

Once you are done with the core user stories, move on to the optional user stories, particularly the non-JS stories.

Re-acquaint yourself with the acceptance criteria in the previous assignment before moving forward.

Below are recommend steps and tips for finishing this assignment.

#### Define the Schema

Before we can start writing to PostgreSQL we need to create a new database and define a schema. To create a new database named `news_aggregrator_development` run the following command:

```no-highlight
$ createdb news_aggregator_development
```

Now consider how you want to store the articles in your database. Within the *schema.sql* file, uncomment the `CREATE TABLE` SQL statement and add the appropriate column definitions for the *articles* table (`--` starts a comment in SQL).

Create columns for each of the **attributes** of an article: title, URL, and description. These can all be of type `VARCHAR`. Remember to include any necessary constraint (like `NOT NULL`).

To execute these SQL statements against the database, run the following command:

```no-highlight
$ psql news_aggregator_development < schema.sql
```

#### Set Up the Web Application

We strongly encourage you to refer to the web application originally built in the News Aggregator challenge from the earlier Sinatra curriculum, though you can start from scratch if you would prefer.

If you do use your old code, make sure _remove/replace any calls that interact with the CSV file_. In fact, much of this assignment will be setting up database transactions (with SQL queries) that will insert or retrieve information from your new PG database.

In particular, you may wish to use the code from the `erb` views in your previous News Aggregator Plus assignment. Though again, you may start from scratch if you wish.

#### Utilizing the Article Class
**Note:** *You may finish this assignment without using an Article class*, but we strongly encourage you to use an Article class abstraction. If you choose not to use an Article class to help run your SQL queries, you will not be following the steps below.

To follow best practices, define class methods on your `Article` class that both run your SQL database queries AND create Article instance objects. **The `db_connection` method is already defined in your server.rb. This means you have access to the `db_connection` method in your article.rb file without needing any additional require statements.**

1. Define a `self.all` method for the Article class that will retrieve all article records using a sql query and returns an array of article objects. This will be used in your index route.
2. Define a `self.create` method for the Article class that persists an article using a sql query and returns the newly persisted article as an object. This will be used in your `POST` route for creating a new aticle.

**Based on Non-Core Stories:**
3. Define a `self.find` method for the Article class which takes an argument of `id`, executes a sql query to grab the record associated with that id, and returns that article as an object. This will be used in your show route.

#### Working Through the User Stories
In addition to the criteria outlined in [News Aggregator Plus](https://learn.launchacademy.com/lessons/news-aggregator-plus), acceptance tests have been written for you that cover the core functionality of the original application. By getting these tests to pass, you will ensure that your application has not experienced any regressions. Ignore the pending tests until you get to the optional part of this challenge.

#### Development vs. Test Databases in the Web Application
**Important:** Previously, your application only had one source of data in a CSV, which was deleted whenever the test suite was run. However, your app will now have two sources of data:

1. A development database that your application will use when the application is run on your local machine (for this challenge the name of the database is `news_aggregator_development`) via `ruby server.rb`.
2. A test database that will be used by your test suite (for this challenge the name of the database is `news_aggregator_test`) when you run `rspec`.

By having two databases, the data that you generated by using your app will not be modified, and your tests will have a place to create records. Your test suite will take care of creating the test database and loading it with your schema, so you do not have to worry about that part of the test setup.  

If you are writing your own tests, know that your test database will have no data at the beginning of every `it` or `scenario` block _unless_ you write to your database in that test. If the test requires some data, you will need to seed data at the beginning of the test. For an example, take a look at `user_sees_articles_spec.rb`.

### Tips

* Remember, users will try to do evil things to your app (like try to drop all of your tables). Use the `exec_params` method with the `pg` gem to prevent users from running malicious SQL statements against the database.
* To enforce URL uniqueness in the database you may want to look at [unique indexes](http://www.postgresql.org/docs/9.4/static/indexes-unique.html) in PostgreSQL.

### Optional Challenges
1. Consider completing the non-core stories in the original [News Aggregator Plus](https://learn.launchacademy.com/lessons/news-aggregator-plus) assignment.
2. Change `xdescribe` to `describe` in `spec/models/article_spec.rb` and then get these tests to pass.
3. Change `xcontext` to `context` in spec/features/user_adds_article_spec.rb` and then get these tests to pass.
