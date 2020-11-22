In the [classic computer game _Oregon Trail_](https://en.wikipedia.org/wiki/The_Oregon_Trail_%281985_video_game%29), players attempt to "hunt" for food, clicking on the screen to fire a shot. The software must then determine whether the shot is a hit or a miss -- a hit nets the player food for their family, whereas a miss brings them one step closer to death!

![Oregon Trail hunting scene](https://s3.amazonaws.com/horizon-production/images/oregon_trail.png)

### Getting Set Up

```no-highlight
et get bounding-box
cd bounding-box
bundle install
```

#### Learning Goals

- Use OOP to create classes that can be used to determine whether a point is within a box or a set of boxes
- Use TDD to guide development

### Defining a Bounding Box

Many graphical applications require a way of checking whether a point is within a defined geometric shape -- for example, whether a mouse-click is on a "buffalo" in the Oregon Trail hunting game. A simple technique for checking overlap is to wrap the entire object of interest in a rectangle called a **bounding box** and then check whether the point of the mouse-click is within that box.

![Oregon Trail buffalo bounding box](https://s3.amazonaws.com/horizon-production/images/oregon_trail_bounding_box.png)

We know that the mouse-click is within a box if it meets the following conditions:

- The `x` coordinate of the mouse-click is
  - greater than or equal to the left edge of the box AND
  - less than or equal to the right edge of the box AND
- The `y` coordinate is
  - greater than or equal to the bottom edge of the box AND
  - less than or equal to the top edge of the box

It's important to be able to translate sentences into mathematical expressions. _Take a moment and translate the statements above into mathematical expressions._

(For a quick visual refresher on the Cartesian coordinate system, [click here](https://www.mathsisfun.com/data/cartesian-coordinates.html)!)

```no-highlight
    y ↑
      |        width
      |   +----------+
      |   |          |
      |   |          | height
      |   |          |
      |   +----------+
      |
      |       *
      |       (x,y)
------+---------------------→
 (0,0)|                     x
```

{% show_solution %}

For the mouse-click to be between the left and right edges of the box,
its `x` coordinate needs to be greater than the x-coordinate of the
left side of the box (`left_box`) and less than the x-coordinate of the right side of the box (`right_box`):

```ruby
x >= left_box && x <= right_box
```

Similarly, for the mouse-click to be above the bottom of the box and below the top of the box, the following must be true:

```ruby
y >= bottom_box && y <= top_box
```

Putting these pieces together, for the mouse-click to be within the bounds of the box both horizontally (`x`) and vertically (`y`), the following must be true:

```ruby
x >= left_box && x <= right_box &&
  y >= bottom_box && y <= top_box
```

{% endshow_solution %}

### Instructions

Let's create some classes that will make it easy to determine whether a mouse-click is on our buffalo.

#### Create `BoundingBox`

*A test suite for this section has been provided and can be run using the command `rspec spec/01_bounding_box_spec.rb`.*

Create a `BoundingBox` class to represent the rectangle surrounding our buffalo (a placeholder file has been provided in `lib/bounding_box.rb`). The initialize method should take these arguments in the following order:

- `x`, the x-coordinate of the left edge of the buffalo's bounding box
- `y`, the y-coordinate of the bottom edge of the buffalo's bounding box (such that the point `(x,y)` is the bottom left corner of the box)
- `width` of the buffalo's bounding box
- `height` of the buffalo's bounding box

The `BoundingBox` class should have the following instance variables/instance methods:

- `width` returns the width of the box
- `height` returns the height of the box
- `left` returns the x-coordinate of the left edge of the box
- `right` returns the x-coordinate of the right edge of the box
- `top` returns the y-coordinate of the top edge of the box
- `bottom` returns the y-coordinate of the bottom edge of the box
- `contains_point?(x, y)` returns true if the given (x, y) coordinate is within the box and false otherwise

The file `lib/bounding_box.rb` includes two method placeholders: `initialize` and `contains_point?`. You shouldn't need to create any additional methods to complete this part of the challenge.

#### Create `BoundingArea`

*A test suite for this section has been provided and can be run using the command `rspec spec/02_bounding_area_spec.rb`.*

A downside to putting the buffalo in a single box is that a shot into the grass between the buffalo's front and hind legs is still considered a hit, as that grass is within the bounding box. One solution is to use multiple, smaller bounding boxes to get more fine-grained control over the bounding area, as shown in the following image:

![Oregon Trail buffalo bounding area](https://s3.amazonaws.com/horizon-production/images/oregon_trail_bounding_area.png)

To make our game more challenging, create a `BoundingArea` class that represents a collection of individual bounding boxes so that we can require players to be more accurate shots.

Check out `spec/02_bounding_area_spec.rb` and see if you can determine what this class's initialize method should take as input(s).

{% show_solution %}

Looking at our test spec, a new bounding area takes in an _array of `BoundingBox` objects_:

```ruby
...
middle_box = BoundingBox.new(0.0, 0.0, 2.0, 1.0)
top_box = BoundingBox.new(2.0, 1.0, 3.0, 4.0)

area = BoundingArea.new([middle_box, top_box])
...
```

{% endshow_solution %}

This new class should implement the following method:

- `boxes_contain_point?(x, y)` returns true if the given (x, y) coordinate is contained within **any** of the bounding boxes for this area and false otherwise

---

### Helpful Reminders

From Ruby's perspective, an instance variable _is_ an instance method. So, there's no need to do something like

```
def x
  @x
end
```

because it's redundant. Also, this means that your test failures may say "undefined method @x" if you haven't yet defined the _instance variable_ `@x` (because it's all the same to Ruby!).

You can also do more in your `initialize` method than just turn your inputs directly into instance variables. For example, if your input was `inches of snow` and you also wanted to have the equivalent `inches of rain` as an instance variable, you could do

```
def initialize(inches_snow)
   @inches_snow = inches_snow
   @inches_rain = inches_snow / 10
end
```

If you weren't going to use inches_snow in the rest of your class, you could just
use inches_snow to calculate inches_rain and then throw it away:

```
def initialize(inches_snow)
   @inches_rain = inches_snow / 10
end
```

Finally, you can persist your inputs as instance variables with different names:

```
def initialize(inches_snow)
  @snow = inches_snow
  @rain = inches_snow / 10
end
```
