In between games of hangman, our space explorers love playing Tic Tac Toe! Back in the day, someone built a tic tac toe game for them. Unfortunately, the original developer left out one important element: the ability to print the grid.

## Getting Started
```no-highlight
et get tic-tac-toe-in-space
cd tic-tac-toe-in-space
code .
```

### Instructions

Build a method `print_grid` that takes a single argument `board`.
This argument should be a two dimensional array that represents the rows and columns of the tic tac toe board. Implement the method using the `each_with_index` method of `Array`.

The team provided some sample data to help.

```ruby
board_a = [
  ['x', 'o', 'x'],
  ['x', nil, 'o'],
  ['x', 'o', nil]
]
```

Sample output of the `print_grid` method for `board_a` above.

```no-highlight
 x | o | x
-----------
 x |   | o
-----------
 x | o |  
```

```ruby
board_b = [
  [nil, 'o', 'x'],
  ['x', 'o', nil],
  ['x', 'o', nil]
]
```

Sample output to the `print_grid` method for `board_b` above.

```no-highlight
   | o | x
-----------
 x | o |
-----------
 x | o |
```
