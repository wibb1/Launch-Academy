Now that we're finally building Rails applications, we're on the route to success, but first we need a mode of transportation!

First let's setup the application!

```no-highlight
et get on-the-route-to-success
cd on-the-route-to-success
bundle install
bundle exec rake db:create
```

### Hop on a Horse
We need to move quickly, so let's get on a horse!

Run the following commands to create a Horse model, controller, and views.
```no-highlight
bundle exec rails generate scaffold horse name --no-assets --no-test-framework
bundle exec rake db:migrate
```
[**Note:** Scaffolding is a great tool for building small web applications for learning. Scaffolded apps are an excellent resource for understanding out how to construct controllers and views. However, using scaffolding to build a production application is frowned upon for the simple fact that it creates many unnecessary files that you will never use.]

If you visit `config/routes.rb`, you'll notice your routes now include `resources :horses`. If you run `bundle exec rake routes` in your terminal, you can see all the paths that you currently have access to within your application.

```no-highlight
➜  on-the-route-to-success rake routes
    Prefix Verb   URI Pattern                Controller#Action
    horses GET    /horses(.:format)          horses#index
           POST   /horses(.:format)          horses#create
 new_horse GET    /horses/new(.:format)      horses#new
edit_horse GET    /horses/:id/edit(.:format) horses#edit
     horse GET    /horses/:id(.:format)      horses#show
           PATCH  /horses/:id(.:format)      horses#update
           PUT    /horses/:id(.:format)      horses#update
           DELETE /horses/:id(.:format)      horses#destroy
```

Run `bundle exec rspec`. You should have one passing test because now your routes are set up for the `Horse` resource. Don't worry about the pending tests.

### Hop on a Car
Horses are great, but we need more horsepower, so let's get in a car!

Run the following commands to create a Car model, controller, and views.
```no-highlight
bundle exec rails generate controller Cars index --skip-routes --no-test-framework
bundle exec rails generate model Car name:string --no-test-framework
bundle exec rake db:migrate
```

Also go to `spec/features/sees_cars_spec.rb` and remove the pending status from the test by changing

```ruby
scenario "see all the cars", pending: true do
```
to

```ruby
scenario "see all the cars" do
```

Run `bundle exec rspec`. You should have failing tests because you're missing a route to your `CarsController`'s `index` action, your `index` action is empty in your `CarsController`, and your view is not displaying your cars. Address these issues to get the tests to pass.

### Hop on a Train

Cars are fast! However, sitting in traffic is THE WORST. Let's catch a train, so we are always on the move.

Run the following commands to create a Train model and controller.

```no-highlight
bundle exec rails generate controller Trains -—skip-template-engine --skip-routes --no-helper-specs
bundle exec rails generate model Train name:string --no-test-framework
bundle exec rake db:migrate
```

Also go to `spec/features/sees_trains_spec.rb` and remove the pending status from the test.

Run `bundle exec rspec`. You should have failing tests because there is no route to the `TrainsController`'s `index` action, the `index` action is empty in the `TrainsController`, and there is no view for `TrainsController`'s `index` action. Address these issues to get the tests to pass.

### Hop on an Airplane

Trains are sweet, but they still take a while if I want to travel across an entire country. Let's hop on a plane and travel the world!

Run the following commands to create a migration for your Airplane and run it.

```no-highlight
bundle exec rails generate migration create_airplanes name:string
bundle exec rake db:migrate
```
Go to `spec/features/sees_airplanes_spec.rb` and remove the pending status from the test.

Run `bundle exec rspec`. You should now create a model, controller, and a view to see all airplanes in order to get your tests to pass! **DO NOT USE GENERATORS**. Instead, manually create all the files and add the appropriate code.
