The team often gets bored while out in space, so they pass the time with a few games of [hangman][hangman-article].

## Getting Started
```no-highlight
et get hangman-in-space
cd hangman-in-space
code .
```

### Instructions

The team has asked you to create a method `print_puzzle` that prints the row of dashes for a required,
single argument, `word`. The number of dashes or spaces should equal the amount of characters in the word.
`print_puzzle` can also optionally take a list of characters as a second argument
that represents the list of guessed letters.

Given `print_puzzle` is called with the word "perimeter", your method should output:

```no-highlight
_ _ _ _ _ _ _ _ _
```

Given `print_puzzle` is called with the word "triangle" and the list of characters guessed: `t,s,g`,
your method should output:

```no-highlight
t _ _ _ _ g _ _
```

{% show_solution %}
```ruby
def print_puzzle (word, guesses = [])
  word.each\_char do |char|
    if guesses.include?(char)
      print "#{char} "
    else
      print "_ "
    end
  end
end

print_puzzle('persistence', ['s', 'e'])
```

{% endshow_solution %}

[hangman-article]: http://en.wikipedia.org/wiki/Hangman_%28game%29
