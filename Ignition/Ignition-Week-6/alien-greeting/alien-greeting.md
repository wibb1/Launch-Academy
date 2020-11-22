The ship's crew leader has asked you to write a Ruby program that automatically greets aliens when they meet them on adventures.

## Getting Started

```no-highlight
et get alien-greeting
cd alien-greeting
code .
```

### Instructions Part 1

Write a method `greet` that takes an alien's `name` as a single, required argument. It should output a greeting for the supplied name.

Sample Output:

```no-highlight
Hi ZIM!
```

{% show_solution %}

```ruby
  def greet(name)
    puts "Hi #{name}!"
  end
```

{% endshow_solution %}

### Instructions Part 2

Modify your method so that it uses a random greeting among the following options below.

- `Hi [name]!`
- `Yo [name]!`
- `Hey [name]!`
- `Howdy [name]!`

Sample output:

```no-highlight
Hey ZIM!
```

{% show_solution %}

```ruby
  def greet(name)
    random_greeting = ["Hi", "Yo", "Hey", "Howdy"].sample
    puts "#{random_greeting} #{name}!"
  end
```

{% endshow_solution %}

### Instructions Part 3

Modify your method so that it takes an optional, second argument, the user's language. If the second argument is not specified, the method should default to English.

The method should support:

- English: "Hi [name]!"
- Spanish: "Hola [name]!"
- Italian: "Ciao [name]!"
- Irken: "DOOM de doom [name]!"

{% show_solution %}

```ruby
def greet(name, language = nil)
  if language == 'spanish'
    puts "Hola #{name}!"
  elsif language == 'italian'
    puts "Ciao #{name}!"
  elsif language == 'irken'
    puts "DOOM de doom #{name}!"
  else
    puts "Hi #{name}!"
  end
end
```

{% endshow_solution %}
