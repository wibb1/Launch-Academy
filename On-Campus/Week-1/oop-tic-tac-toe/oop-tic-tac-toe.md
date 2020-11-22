## Building Tic Tac Toe

### Learning Goals

- Practice problem decomposition and problem simplification.
- Write a program that utilizes multiple classes in separate files.
- Practice **object composition** (objects using objects).

### Getting Set Up

```no-highlight
et get oop-tic-tac-toe
cd oop-tic-tac-toe
bundle exec bundle install
```

### Instructions

As Ruby developers, it's important we make time to have some fun too...so we want to build a command-line application to play Tic Tac Toe!

Write a program where the user can play a game of **Tic Tac Toe**. Define and use the following classes to organize your code.

- `Space` to represent an individual spot on the game board. This class should keep track of the symbol that it should display. Add the code to implement this class in `lib/space.rb`.
- `Board` to represent the full game board. This class should hold all of the spaces on the board - what kind of data structure do you think we will want to use to hold a gameboard? It should also hold all logic for updating the board and printing it out to the console. Add the code to implement this class in `lib/board.rb`.
- `Player` to represent the each player in the game. Players can keep track of their name and which symbol they're playing with. Add the code to implement this class in `lib/player.rb`.
- `Game` to represent the logic of the game. Add the code to implement this class in `lib/game.rb`.
- `lib/main.rb` is already set up to simply create a new game and play. This file does not need to hold any classes. In the end, you can run the full application by executing `ruby lib/main.js` from your `oop-tic-tac-toe` directory.
- _Hint:_ Remember to `require_relative <filename>` in any `lib` files that need access to other `lib` files! You will _not_ need to do this for your tests.

It is strongly encouraged that you pair program for this assignment. **Additionally, you should be practicing good Test-Driven Development.** We have provided a test file for the `Space` class to get you started. Reflect on the user stories outlined below to guide the construction of your tests. It is not required, but it is recommended that you write unit tests for your classes.

## Managing Problem Complexity with User Stories

We can simplify the complex problem of Tic Tac Toe by describing the gameplay in the form of **user stories**. The goal of a well-written user story is to describe how a user will interact with the software. We can describe the special cases as user stories which could be completed at a later date (or not at all).

**Focus on implementing one user story at a time.** This is how professional software developers manage the complexity of large software projects.

The program should satisfy the following user stories:

#### Begin game

```no-highlight
As a player
I want to enter my name as a specific symbol
So that we can begin the game
```

Acceptance Criteria:

- When the users start a game, player one is prompted for their name as `X`
- Player 2 is then prompted for their name as `O`
- The initial board should be displayed to start the game

#### Prompt for input

```no-highlight
As a player
I want to be prompted to enter a column and row
So that I can decide where I want to move next
```

Acceptance Criteria:

- Tell the player whose turn it is
- Prompt the player to enter a row to move
- Then prompt the player to enter a column
- Display the updated board once the player has entered their desired space

#### Declare winner

```no-highlight
As a player
I want to know when there is a winner
So that I know when the game is over
```

Acceptance Criteria:

- A winner should be declared if someone gets 3 in a row either horizontally or vertically
- You do not need to worry about diagonal wins for the purpose of this assignment
- See if you can limit the rows and columns you need to review based on the latest turn!
- Once someone wins, gameplay should stop
- A message should be output declaring who the winner is

#### Declare tie

```no-highlight
As a player
I want to know if all of the spaces have been filled
So that I know there was a tie
```

Acceptance Criteria:

- If there is no winner, gameplay should continue until all spaces are filled
- Once all spaces are filled, gameplay should stop
- A message should be output declaring that there was a tie

{% show_hint %}
Consider adding a method in your Board class to check if there are any empty spaces left!
{% endshow_hint %}

## Sample Output

```no-highlight
$ ruby ./lib/main.rb
Welcome to Tic Tac Toe!

Player 1 (X), what's your name?
Jack

How about you, Player 2 (O)?
Jill

Let's play!

Jack (X), it's your turn!
Which row do you want to play in?
1

And which column do you want to play in?
1

X | - | -
---------
- | - | -
---------
- | - | -

Jill (O), it's your turn!
Which row do you want to play in?
3

And which column do you want to play in?
3

X | - | -
---------
- | - | -
---------
- | - | O

Jack (X), it's your turn!
Which row do you want to play in?
1

And which column do you want to play in?
2

X | X | -
---------
- | - | -
---------
- | - | O

Jill (O), it's your turn!
Which row do you want to play in?
2

And which column do you want to play in?
2

X | X | -
---------
- | O | -
---------
- | - | O

Jack (X), it's your turn!
Which row do you want to play in?
1

And which column do you want to play in?
3

X | X | X
---------
- | O | -
---------
- | - | O

Jack wins the game!
```
