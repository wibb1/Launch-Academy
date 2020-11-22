The space exploration team needs your help again! It's important the planet rover can correctly calculate the perimeter of the landing area on each planet.
They've requested that you create a Ruby method for the rover to easily calculate the perimeter of a rectangle.

## Getting Started
```no-highlight
et get planet-perimeter-method
cd planet-perimeter-method
code .
```

### Instructions

Write a method that takes two arguments: the `width` and the `height` of a rectangle.
It should return the **perimeter** of the rectangle.

The perimeter of the rectangle is equal to the length of all sides.
For a review of the geometrical formula, check out the diagram below.

![Image of Rectangle](https://s3.amazonaws.com/horizon-production/images/Rectangle.png)

{% show_solution %}
```ruby
def perimeter(width, height)
  2 `*` width + 2 `*` height
end
```
{% endshow_solution %}

Now, make `height` an optional argument and assume that if only one argument is specified,
the user of the method is assuming the rectangle is a square that has an equal width and height.

{% show_solution %}
```ruby
def perimeter(width, height = nil)
  if height.nil?
    width `*` 4
  else
    2 `*` width + 2 `*` height
  end
end
```
{% endshow_solution %}

Great work! You're one step closer to ensuring a safe landing for the team.
