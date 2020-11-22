There are many awesome and powerful magical creatures out there, and we want to track which ones are our favorites in this web application.

### Learning Objectives

- Build a Sinatra application to serve dynamically generated HTML
- Understand the role of the server and views in a Sinatra application and how they interact

## Getting Started

```no-highlight
et get magical-creatures
cd magical-creatures
bundle exec bundle install
```

## Navigating the application

Before diving into this exercise, let's review the file structure, which may be unfamiliar.

#### Views

In this assignment, we have minimized repetition by putting a `layout.erb` file in our `views` folder, which gives us the general structure and header of the HTML. Any erb template that you designate (e.g. `index`, `show`, etc) when creating a Sinatra route will be rendered inside of the `layout.erb` template where the `<%= yield %>` tag is.

#### Server

The `server.rb` is where you will be writing code to configure the logic for each of the paths a user visits. Specifically, this is where you will prepare the data needed for a specific webpage and specify which ERB template should be used. This will be the first step in setting up each webpage, and will determine which paths are available in your app.

#### Public

Unless you wish to configure JavaScript or styling, you will not need to edit the files in the `public` folder.

#### Models

This is where we will define our classes. You do not need to define classes or use this folder at all unless you begin the non-core stories.

_Note:_ You can use `require_relative` to require only one file, e.g., `require_relative "../models/magical_creature.rb"`, but you can also use an `*` to require all the files within a directory, e.g., `require_relative "models/*.rb"` for all `.rb` files in the `models` directory.

## Instructions

Build a web application that has a homepage welcoming me to the website, an _index_ page that lists our favorite magical creatures, and _show_ pages presenting each individual magical creature.

Tackle these user stories in the order that they're presented.

## User Stories

#### Part 1

```no-highlight
As a huge fan of magical creatures
I want to arrive at a welcome page when I navigate to the root path
So that I can get excited about magical creatures
```

Acceptance Criteria:

- When I visit `/`, I can see a header with a welcome message to the website reading "Welcome One and All to the Magical Creatures Website!"
- Below the header is a short paragraph description of the website, which you can make up yourself!
- _Extra credit:_ Render an image of a magical creature of your choosing on the home page. You may wish to revisit how to use an HTML image tag to aid you.

**Tips:** Create a template `home.erb` to render your welcome page. You won't need instance variables in your server.rb to satisfy this story, since this information will be static.

#### Part 2

```no-highlight
As a huge fan of magical creatures
I want to view a page with the names of each magical creature
So that I can remember which magical creatures are my favorite
```

Acceptance Criteria:

- When I visit `/creatures` I can see list of all the magical creature names
- The list of magical creatures should come from the `MAGICAL_CREATURES` array, which has been provided as a ruby constant

**Tips:** In addition to creating a route and erb template, you'll need to define an instance variable so that you can pass your magical creature data to your view template.

#### Part 3

```no-highlight
As a huge fan of magical creatures
I want to view additional information about a creature
So that I can learn more about that creature
```

Acceptance Criteria:

- I can navigate to a distinct url and web page for each magical creature. Specifically, navigating to `/creatures/unicorn` should bring bring me to a unicorn show page, and navigating to `/creatures/dragon` should bring me to a dragon show page
- Each creature page displays the creature's name, age, and magical ability

**Tips:** _Note that until you finish Part 4 you will need to navigate to these show pages by editing the url in your browser directly._ We'll need to use dynamic routing and params to accomplish this task. Focus first on defining your dynamic route, then on rendering the creature's name at that route, and lastly on being able to render the creature's magical ability.

#### Part 4

```no-highlight
As a huge fan of magical creatures
I want to see links to each magical creatures show page
So that I can easily navigate the website
```

Acceptance Criteria:

- When I visit `/creatures`, each name shown is a link to a magical creature's show page

**Tips:** You'll need to make use of `<a>` tags as well as ruby `<%= %>` "show cones".

## Non-Core User Stories

Below are optional user stories that you may wish to tackle. It is suggested that you finish the core user stories above before beginning.

#### Part 5

We are huge fans of object-oriented programming in the magical world, so we use objects to represent each of our creatures in our Sinatra application.

**Define a `MagicalCreature` class that has the following aspects:**

- takes in a `name` as an argument, a `magical_ability` as a second argument, and an `age` as an optional third argument
- has a method`#ancient?`, that returns true if the creature's age is greater than 200 or `nil` and false if it is less than or equal to 200.

_Note: The convention in Sinatra is to define the classes you create in the `models` folder._ You will also need to add an appropriate `require_relative` statement in your `server.rb` in order to load in your class.

**Use your `MagicalCreature` class in your application**

- When navigating to `/creatures` you should initialize a `MagicalCreature` object for each creature in the array `MAGICAL_CREATURES`. Use these magical creature objects to help render information to the screen.
- When navigating to `/creatures/:creature_name` (show page), initialize a `MagicalCreature` object that corresponds with name featured in your dynamic `params` hash. Use the `MAGICAL_CREATURES` array to help you create a `MagicalCreature` object with the right attributes.
- Navigating to a creature's show page should now also show whether or not the animal is ancient, depending on their age.

#### Part 6

Write unit tests for your new functionality in `spec/models/magical_creature_spec.rb`. You should be testing attribute readers, writers, and/or accessors as well as any methods you define.
