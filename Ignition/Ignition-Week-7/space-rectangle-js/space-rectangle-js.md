Remember when you were asked to create a Ruby method for your space exploration team's rover to easily calculate the perimeter of a rectangle? Well, they need you to do that again for a new rover, this time using a JavaScript class. By creating a class and not just a function, your team will be able to reuse the class every time they need to calculate a new rover landing area.

## Getting Started

```no-highlight
et get space-rectangle-js
cd space-rectangle-js
code .
```

### Instructions

Define a new `class` that represents a `Rectangle` in `rectangle.js`.

Constructing a `Rectangle` should require two arguments, the `width` and the `height`.
This information should be retained as part of each object's **state**, also
known as **attributes**.

You should be able to replicate output similar to the following JavaScript
console session using the class you have created.

```no-highlight
new Rectangle(5, 6);
=> Rectangle {width: 5, height: 6}
new Rectangle(4, 6);
=> Rectangle {width: 4, height: 6}
new Rectangle(4, 8);
=> Rectangle {width: 4, height: 8}
```

{% show_solution %}
```no-highlight
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
```
{% endshow_solution %}

### Allow Square Rectangles

Modify your `Rectangle` class so that it only requires a single argument, but
allows an optional, second argument.

If a single argument is specified, assume the `Rectangle` is a square, where
both the `width` and `height` are equal.

```no-highlight
new Rectangle(5, 6)
=> Rectangle {width: 5, height: 6}
new Rectangle(8, 6)
=> Rectangle {width: 8, height: 6}
new Rectangle(9)
=> Rectangle {width: 9, height: 9}
new Rectangle(12)
=> Rectangle {width: 12, height: 12}
```

{% show_solution %}
```no-highlight
class Rectangle {
  constructor(width, height) {
    this.width = width;

    // check if height is provided
    if (height) {
      this.height = height;
    } else {
      this.height = width;
    }
  }
}
```
{% endshow_solution %}

### Give the Rectangle Behavior

Add a method to your `Rectangle` class that calculates the area of a `Rectangle`
object, based on its width and height.

```no-highlight
let rectangle = new Rectangle(5, 6)
rectangle.area()
=> 30
let anotherRectangle = new Rectangle(9)
anotherRectangle.area();
=> 81
```

{% show_hint %}
* The area of rectangle is defined as its `width` multiplied by its `height`
* You will need to create a method in order to calculate and return the area of
  the Rectangle object.
{% endshow_hint %}

{% show_solution %}
```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;

    if (height) {
      this.height = height;
    } else {
      this.height = width;
    }
  }

  area() {
    return this.width * this.height;
  }
}
```
{% endshow_solution %}
