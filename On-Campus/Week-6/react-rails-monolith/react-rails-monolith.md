# React Rails Monolith

## Background

Congratulations! You've made it to the point in the curriculum where you have
learned all you need to know to create a React on Rails application. This is
super exciting! Now let's actually go through and put it all together.

There is a pressing need to review breakfast cereals. There's so much to talk
about and so few places to do it. You're going to be creating an amazing app
to give everyone the place they've so desperately wanted to discuss the
cereals of the world.

Beware, this assignment is going to take a good bit of time and is focused on
getting you to use our whole stack. It will take quite a bit of time just to
get the basic application up and running. Don't be frustrated. Learning all
of these technologies takes a good bit of time, so does learning how to put
them all together!

You've been provided with a boilerplate that has React already setup and ready
to go, complete with a testing setup! Run the following commands in one tab:

```
$ bundle install
$ rake db:create
$ rails s
```

And in another tab run the following:

```
$ yarn install
$ yarn run start
```

This should get everything running! You should see no errors in the console and a
very basic message displayed on the page.

## Instructions

1. First we must get this application setup with some actual React components.
Create a component called `App` that displays a basic header about cereals. This will
be the start of your React application.

2. Next let's get your Router setup. In the `App` component, change the text about
cereals to be a React Router that has two routes: a cereals index route (`/cereals`)
that will eventually display all the cereals and a dynamic cereals show route
(`/cereals/:id`) that displays the information for a specific cereal. Remember that
you need to define a route on your Rails side that serves up a view with the correct
div to render the React app as defined in `application.js`. (HINT: Look at how this is done
for the root path in the `config/routes.rb` file)

3. You'll need to make `CerealsIndexContainer` and `CerealShowContainer` components that
the React Router will render at the appropriate routes. Make these components that for
now will just show some basic text to make sure things are hooked up the right way. Make
sure to add these components to the Router.

4. Awesome! We've got a basic React setup and we should be able to see the two React
containers on the page when we go to the appropriate route.

	Now we actually need to display some real information. This is going to involve setting
	up an API endpoint and a model that gets sent back as JSON. Let's get our cereal model
	setup. This should have a name and description for now. Create the model, add the appropriate
	validations and then define an API endpoint that renders back all the cereals as JSON. Since
	it is sending back all the cereals, this should be your index action within your API
	controller.

5. Test that API controller! Remember, this is going to involve making model tests for your `Cereal`
model as well. (Come on, you didn't really think we were going to get away from
testing, did you?)

6. Now it's time to go back into our React application and get some information for our
`CerealsIndexContainer` to display. Make a fetch call in the appropriate lifecycle method
to get all the cereals from your API and display the title of each cereal in a list. (HINT:
This might be a good place to create a presentational component that you could render an
array of React components!)

7. Time to test those React components! Follow the testing patterns we setup earlier in
the cohort to get the `CerealsIndexContainer` and the presentational component it renders
tested.

## Extra Challenge

8. Follow the same API-Test-Component-Test workflow to setup the `CerealShowContainer`. This
should have an API endpoint that returns one specific cereal based on the id in the URL, a fetch
call that gets the cereal's information and a presentational component that displays all of
that information.

9. Finally, refactor the presentational component that renders the link to each cereal's
show page to use React Router `Link` components so that you can navigate about the app
seamlessly and without page reloads. Refactor any tests that need to be to account for this
link component being rendered (Hint, you should need to if your tests are written well).

## Final Words

This is a bear of an assignment! It requires a lot of files and code and really ties together
everything you've learned thus far as a Launcher.

If you are struggling with this process and cannot get React up and running, try setting up the Webpacker gem by following the "Adding Webpacker To Rails" Article.

 If you complete this assignment, you should
feel *incredibly* confident about your ability to use our *entire* stack.

Remember to use your `debugger`s and `pry`s to get yourself through the difficult times
when your code inevitably don't work. This is as good an assignment as any to pair program
on because you can help each other fill in your gaps in knowledge. You've got this! Get
excited to use the entire stack we've used!

Also, don't forget to style as you go with your React components! If you wait until the end
it's going to be a far bigger pain to fit all the styling in at once. Then you can refine
how it all fits together at the end!

**GOOD LUCK!**
