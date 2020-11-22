Let's make an application that can deal cards, called High Card Dealer. It's a 52-card deck game where the player with the highest total value of cards wins the game.

### Getting Set Up

```no-highlight
et get high-card-dealer
cd high-card-dealer
```

## Overview of the Deck of Cards

Each card in our game should have a suit and a rank. e.g. 3 (rank) of hearts (suit).

There are four suits, and 13 ranks, including face cards. All card can be given a value based on its rank. For example, a "4" card is greater than a "2" card. A "Jack" card is greater than a "10" card. "Ace" is greater than "Queen".

The value of a card is based on its rank. The value of cards with a number is simply that number i.e. a `4 ♥` card's value is four, `6 ♠` card's value is six. Face cards have custom values: `J` cards have a value of 11, `Q` cards have a value of 12, `K` cards have a value of 13, `A` cards have a value of 14.

Each of the ranks and suits can be found below.

SUITS = ['♦', '♣', '♠', '♥']
RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

## Instructions

Create a command-line game where 52 cards are created, and two players are dealt four cards randomly from the deck. The player that has the highest total value of cards in their hand wins the game. The game should output information to the command line accordingly, so that we know which player won the game and why.

Running `ruby game.rb` should run the game to completion. No user input is needed for this application.

## Order of the Game

- A user can start the game by running `ruby game.rb`.
- When the game begins, a user should see the output GAME START!.
- A deck of 52 cards is created, and a message should appear to confirm the deck's creation.
- Two hands of four cards should be created, one for player 1, and the other for player 2.
- As the cards are dealt, a user should see a list of these cards output to the screen.
- Once all of the cards are dealt, a user should see the total values of each hand. The value of the hand is the sum value of its cards.
- The player with the highest hand value wins the game.
- Output should be given that shows which player won the game.
- If the hand values are the same, a user should see the output "TIE!"

## Sample Output

```no-highlight
$ ./game.rb
GAME START!

There are 52 cards in the deck.

Player 1 was dealt 10♦, A♣, Q♠, 8♥
Player 2 was dealt 5♥, 7♦, 2♥, J♠

Player 1's hand value: 44
Player 2's hand value: 25

Player 1 wins the game!
```

## Getting Started

Because running `ruby game.rb` starts the game, you should have some, if not a majority of your logic in this file, such as a creating your `Deck` and `Hand` instances. You are encouraged to brainstorm, or better yet, discuss with others, how to get started.

Two classes have been created for you: `Card` and `Deck`. Make sure to view all of the files that have been provided before beginning the assignment.

The logic in the `Deck` should already allow for the creation of a 52 unique cards. Specifically, the `build_deck` method uses our lists of ranks and suits to create `Card` objects programmatically. Because `build_deck` is called in our constructor, any new `Deck` object will come with 52 cards.

Cards can be dealt i.e. removed from a deck and given to a player. We suggest creating a `Hand` class to represent both the player and their collection of card objects. A `Hand` object should be be able to hold these cards in an array. A hand should have no more than four cards.

We suggest the following criteria for your application, though your own app may slightly differ.

### Card

- A `Card` object should be initialized with `rank` and `suit`. This information should be stored in state.
- There should be a `#value` method on a `Card` object, that returns the value of the card.

### Deck

- A `Deck` object should initialize without arguments.
- A `Deck` object should create an array of 52 unique cards upon initialization. This array should be stored in state.
- A `Deck` should have a `#deal` method that should remove cards from the deck, and return them.

### Hand

- A `Hand` object should be initialized with an array of card objects (these objects should be passed from the `Deck`'s `#deal` method.)
- A `Hand` object should have a `#value` method that returns the total value of the cards in a hand

Good luck! Know that implementations may vary.

If you find that you have extra time, feel free to tackle these optional user stories as well.

#### Optional User Stories

This card game is very similar to the classic card game "War".

- Create RSpec tests for each of our classes and their methods. Note that if your methods are too long, or if they have too much logic, they may be more difficult to test. As such, you may need to refactor some of your code to create DRYer methods.
- Upgrade your "tie" condition to allow for the classic "WAR" condition. See wikipedia's "Gameplay" section for further details: [War Wikpedia Article](<https://en.wikipedia.org/wiki/War_(card_game)>)
- Further customize your game! Allow for user inputs, or special modes of play. See the "Versions" section of the wikipedia article for more details: [War Wikpedia Article](<https://en.wikipedia.org/wiki/War_(card_game)>)
