You've arrived at the movie theater, you're amazed to see that everyone came out to see Troll 2! There is a line out the door. The usher heard from the waiter at the diner that you were pretty good with Ruby, so he's guaranteed you a seat if you can help him model the theater as an instance of an object.

### Getting Started

```no-highlight
et get movie-sell-out
cd movie-sell-out
code .
```

# Part I: An Empty Room

Define your `Theater` constructor so that it requires a number of seats. You should also maintain the number of patrons you've admitted with each instance. Naturally, when you construct a `Theater`, the number of patrons should be 0.

## Part II: Admit One!

Define an `admit!` instance method that optionally takes a single argument. This argument should represent the number of people to admit. It should default to 1 if the argument is not specified.

Each time it is called, it should increase the number of patrons in the theater.

If the number of patrons to admit exceeds capacity, don't admit them! Provide the usher with an error message and leave the number of admitted patrons unchanged.

## Part III: `at_capacity?`

Write an instance method `at_capacity?` that checks to see if the Theater is at capacity. It should return `true` if the total number of patrons is equal to the number of seats. If the number of patrons hasn't reached capacity, the method should return `false`.

## Part IV: `record_walk_outs!`

Troll 2 is so horrendously bad that people are leaving! The usher needs for you to implement a `record_walk_outs!` method that takes an optional, single argument. This should **decrease** the number of patrons recorded for the `Theater` instance. If no argument is supplied, the method should default to a single walk-out.

{% show_solution %}

```ruby
class Theater
  attr_reader :admitted, :capacity

  def initialize(number_of_seats)
    @capacity = number_of_seats
    @admitted = 0
  end

  def admit!(patrons = 1)
    if @admitted + patrons > @capacity
      "Sorry! We're at capacity! Try again later."
    else
      @admitted += patrons
    end
  end

  def at_capacity?
    @admitted == @capacity
  end

  def record_walk_outs!(patrons = 1)
    @admitted -= patrons
  end
end
```

Note that the attr_reader isn't _necessary_ here, but would be convenient to have when checking your code's behavior from the terminal!

{% endshow_solution %}
