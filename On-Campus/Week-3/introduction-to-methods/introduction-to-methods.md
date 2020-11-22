**This video references another video you have not seen. For the most successful experience, follow the Getting Started instructions.**

## Learning Goals

* Using a Gemfile to load dependencies
* Create custom methods
* Evaluating arguments vs parameters
* Implementing pry

## Getting Started

```no-highlight
et get introduction-to-methods
cd introduction-to-methods
bundle
atom .
```

>If bundle errors, you may need to run `gem install bundler` first, then bundle.

### Video

{% vimeo_video '156037315' %}


### Timestamps

* 00:00 - Introduction and topics which will be covered: **Methods and Return Values**
* 00:50 - Using a **Gemfile** to load in dependencies
* 01:15 - Running the `bundle` command in order to install dependencies in the Gemfile
* 01:40 - Defining the `random_color` method
* 03:00 - Referencing methods before they are defined doesn't work
* 04:30 - Implementing the `random_color` method
* 05:28 - Calling the `random_color` method in a loop
* 06:28 - Explanation of **return values**
* 07:35 - Refactoring the `random_color` method to use the `colorize` gem
* 08:20 - Reading `colorize` documentation
* 10:25 - Implicit vs. explicit use of the `return` keyword
* 12:10 - Recap of the `random_color` method.
* 12:45 - Creating a use case for a `randomly_colorize(string)` method
* 13:40 - Creating method names first, then defining them
* 14:20 - Methods with one or more arguments
* 14:40 - Parenthesis are optional when calling methods
* 15:05 - Defining the `randomly_colorize` method
* 15:30 - Passing variables to methods via arguments, using the method parameters, scoping of variables.
* 16:20 - Demonstrating the difference between arguments and parameters
* 17:18 - Methods as reusable pieces of code
* 17:40 - Implementing the `randomly_colorize` method, methods calling methods
* 19:00 - We prefer _returning_ values from methods rather than `puts`ing values from within methods
* 19:30 - Debugging with `pry`
* 19:55 - `puts` returns `nil`
* 20:20 - Refactor `randomly_colorize` to return a string
* 23:22 - Calling `randomly_colorize` without any arguments causes a `wrong number of arguments (0 for 1) (ArgumentError)` error
* 24:35 - **Optional method arguments**
* 26:38 - Reading error messages
* 27:40 - **Default method parameters**
* 30:10 - Testing out our more flexible `random_color` and `randomly_colorize` methods
* 31:20 - Wrap up


> For reference, you can refer to the [methods GitHub Repository](https://github.com/LaunchAcademy/methods) for the code created in this lesson.
