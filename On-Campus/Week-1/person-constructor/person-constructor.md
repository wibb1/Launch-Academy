### Getting Started

```no-highlight
et get person-constructor
cd person-constructor
code .
```

### Part I

Create a `Person` class with a constructor (the `initialize` method) that requires two arguments, the `first_name` and the `last_name` of the person. We can create `Person` objects using `Person.new(first_name, last_name)`, with the names being those of the person we are creating.

Remember to save this code in a `person.rb` file. You should be able to replicate output similar to the following pry session using this new constructor.

```no-highlight
$ pry
pry(main)> require_relative "person"
=> true
pry(main)> Person.new('John', 'Smith')
=> #<Person:0x007f8533202960 @first_name="John", @last_name="Smith">
```

{% show_solution %}
```ruby
class Person
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end
end
```

{% endshow_solution %}

### Part II

Remember how you can set default arguments in your method definitions? Modify
your `Person` class constructor so that it takes one or two arguments. If I
specify one argument, assume the person's entire name is specified. If I specify
two arguments, assume the `first_name` and `last_name` are specified.

You should be able to replicate output similar to the following pry session using this new
constructor.

```no-highlight
pry(main)> Person.new('John Smith')
=> #<Person:0x007fdf2b1f6f28 @first_name="John", @last_name="Smith">
pry(main)> Person.new('John', 'Smith')
=> #<Person:0x007fdf2b30e550 @first_name="John", @last_name="Smith">
pry(main)> Person.new('Jane', 'Doe')
=> #<Person:0x007fdf2b3eea10 @first_name="Jane", @last_name="Doe">
```

{% show_solution %}
```ruby
class Person
  def initialize(name, last_name = nil)
    if last_name.nil? #No last name given, so name is the full name
      full_name = name.split
      @first_name = full_name[0]
      @last_name = full_name[1]
    else #First and Last names are given, name being the first name
      @first_name = name
      @last_name = last_name
    end
  end
end
```

{% endshow_solution %}

### Extra Credit: Part III

As an extra challenge:
- Modify your constructor so that it can support
one, two, or three arguments, with the last argument being an optional `middle_name`.

- Modify the case where if one argument is supplied,
your constructor attempts to figure out the first name, last name, and middle name.

Consider the following cases of construction for "Jane Sally Doe" and "John
Michael Smith". You should be able to replicate output similar to the following
pry session using this new constructor.

```no-highlight
pry(main)> Person.new('Jane Sally Doe')
=> #<Person:0x007f8dc4804b08 @first_name="Jane", @last_name="Doe", @middle_name="Sally">
pry(main)> Person.new('Jane Doe')
=> #<Person:0x007f8dc5033e78 @first_name="Jane", @last_name="Doe">
pry(main)> Person.new('Jane', 'Doe', 'Sally')
=> #<Person:0x007f8dc53283e0 @first_name="Jane", @last_name="Doe", @middle_name="Sally">
pry(main)> Person.new('John', 'Smith', 'Michael')
=> #<Person:0x007f8dc53d8ba0 @first_name="John", @last_name="Smith", @middle_name="Michael">
pry(main)> Person.new('John', 'Smith')
=> #<Person:0x007f8dc48f1070 @first_name="John", @last_name="Smith", @middle_name=nil>
```

{% show_solution %}
```ruby
class Person
  def initialize(name, last_name = nil, middle_name = nil)
    if last_name.nil? # 1 argument
      full_name = name.split
      @first_name = full_name[0]
      if full_name.length == 2
        @last_name = full_name[1]
      else
        @middle_name = full_name[1]
        @last_name = full_name[2]
      end
    elsif middle_name.nil? # 2 arguments
      @first_name = name
      @last_name = last_name
    else # 3 arguments
      @first_name = name
      @last_name = last_name
      @middle_name = middle_name
    end
  end
end
```

{% endshow_solution %}
