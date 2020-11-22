In this article we'll show how we can build forms in a Rails application.

### Learning Goals

* Understand how HTML forms work
* Understand how Rails' `form_for` helper simplifies building forms

### Setup
```no-highlight
et get rails-forms
cd rails-forms
bundle
bundle exec rake db:create
bundle exec rake db:migrate && bundle exec rake db:rollback && bundle exec rake db:migrate
```

### HTML Forms and the Parameters Hash

A basic form in HTML contains a **form** tag that wraps the form fields and a number of **input** tags: one for each field and one for the submit button. It may also include other tags, such as **select** tags for drop-down select menus, but for simplicity's sake we'll restrict our discussion to simple `<input>` tags.

When a form is submitted, the data entered into the fields are encoded and serialized and sent to the web server. When the web server receives a request with form **parameters**, it stores them in a hash that is accessible via the controller handling the request. This is the parameters hash, accessible as `params`.

The attributes on the `<form>` and `<input>` tags determine what HTTP request will be sent and how the information from the form will be stored in the parameters hash. Let's take a closer look at how this works.

Each `<form>` tag will contain two key attributes that determine what happens when we submit the form: the **action** attribute, which provides the path or route, and the **method**, or HTTP verb. A `<form>` tag can contain other attributes, but these are the two we're most interested in.

A form for creating a new book in a Rails app, for example, might look something like this:

```html
<form action="/books" method="post" ...>
  <!-- a bunch of input fields & corresponding labels -->
  <input type="submit" ...>
</form>
```

How does this determine what Rails includes in the `params` hash? Well, the **name** attributes on the `<input>` tags are used as the keys in the hash. For example, consider the following form to create a new book:

```html
<form action="/books" method="post" ...>
  <label>Author</label>
  <input name="book[author]" type="text"...>

  <label>Title</label>
  <input name="book[title]" type="text"...>

  <input type="submit" ...>
</form>
```

Our parameters hash would include a key-value pair with a key of `book` and a value consisting of a hash containing the keys `author` and `title`. If we filled in the form with the title "Green Eggs and Ham" and author "Dr. Seuss", our parameters hash should include a key-value pair that looks like this:

```ruby
"book"=>{"author"=>"Dr. Seuss", "title"=>"Green Eggs and Ham"}
```

**Note:** If we did not set the name attribute on an input field, it would not be included in the parameters hash.

#### What Happens After Form Submission?
When the form is submitted, an HTTP `POST` request is sent to the `/books` path. The router considers the path (`/books`) and the method `POST` and, based on Rails conventions, looks for a `#create` method within `BooksController`. That method may look something like

```ruby
def create
  @book = Book.new(params["book"])

  if @book.save
    redirect_to @book
  else
    render :new
  end
end
```

You may remember that, in ActiveRecord, `Book.new` followed by `Book.save` is the equivalent of `Book.create` (which you may have used more frequently in the past). Here, we take advantage of this two-step process to create an instance of a book in memory and then specify different behaviors depending on whether we're able to successfully save our new book to our database. In this example,
* if the save is successful, we're redirecting to the book show page
* otherwise, we're rendering our `new` page again.

  *Note that that new page will have access to `@book`, which is still the book object we stored in memory with `book_params`. This means that our form will render with the user's previously entered information!*

#### Strong Params
For safety's sake, we'd like to [sanitize our user input](https://www.xkcd.com/327/) so that we know that we're not storing malicious data to our database. One strategy we'll use is "strong params". If you look at the bottom of the books controller in the supplied code, you'll see
```ruby
  private
  def book_params
    params.require(:book).permit(:author, :title)
  end
```
This code looks at our params hash and requires that it contain a `book` key. The value corresponding to that `book` key can then have an `author` and a `title`, but nothing else. If a user manages to submit
```ruby
"cat"=>{"author"=>"Dr. Seuss", "title"=>"Green Eggs and Ham"}
```
our `book_params` function will return `nil` because we've required that first key to be "book". If they submit
```ruby
"book"=>{"author"=>"Dr. Seuss", "title"=>"Green Eggs and Ham", "description"=>"Something evil here"}
```
our `book_params` function will return simply
```ruby
"book"=>{"author"=>"Dr. Seuss", "title"=>"Green Eggs and Ham"}
```
To take advantage of this sanitization, call this method by using `@book = Book.new(book_params)` instead of `@book = Book.new(params["book"])`.

### Rails `form_for` Helper

Rails provides us with view **helpers** to make creating forms in our views easier. **Helpers**, in this context, are methods Rails provides that help us to quickly generate HTML markup.

Let's take a look at one of these helpers which gets used frequently: **form_for**. The `form_for` helper creates your form for you: it creates the `<form>`, `<label>`, `<input>`, and other tags for you, all with the appropriate attributes.

To check out `form_for` in action, let's take a look at the app provided called Bookstore.

### Form Creation

Open up the `rails-forms` in an editor and check out the ERB page for creating new data at `app/views/books/new.html.erb`. Build your form using the following code:

```erb
<%= form_for(@book) do |f| %>
  <div class="field">
    <%= f.label :author %><br />
    <%= f.text_field :author %>
  </div>

  <div class="field">
    <%= f.label :title %><br />
    <%= f.text_field :title %>
  </div>

  <div class="actions">
    <%= f.submit %>
  </div>
<% end %>
```

The `form_for(@book)` helper creates the outline of the form and additional methods are called to create the labels and input fields for each attribute on our `Book` model. The `book` variable is actually the instance variable `@book` passed in from the books controller to `app/views/books/new.html.erb`, where the partial is rendered.

When this partial is rendered by the controller, the embedded ruby (ERB) will be evaluated, with the resulting document being an HTML form like we saw above. To see this, fire up your `bundle exec rails server` and navigate to [http://localhost:3000/books/new](http://localhost:3000/books/new). If you view the source code of the HTML page, you should find the following:

```html
<form accept-charset="UTF-8" action="/books" class="new_book" id="new_book" method="post">
  <div style="margin:0;padding:0;display:inline">
    <input name="utf8" type="hidden" value="&#x2713;" />
    <input name="authenticity_token" type="hidden" value="J4d4+QxteoTzmoHWFLDOAGTRnZnWTCLujlGQidriRXQ=" />
  </div>

  <div class="field">
    <label for="book_author">Author</label><br>
    <input id="book_author" name="book[author]" type="text" />
  </div>

  <div class="field">
    <label for="book_title">Title</label><br>
    <input id="book_title" name="book[title]" type="text" />
  </div>

  <div class="actions">
    <input name="commit" type="submit" value="Create Book" />
  </div>
</form>
```

You can see that our `form_for` invocation has created a `<form>` tag with the action `/books` and the method `post`, and `<input>` fields with the names `book[author]` and `book[title]`, in addition to some other code that you don't need to worry about for now.

Fill in the form and click "Create Book". Inspect the output in the terminal where you're running your server. You should see an entry something like this:

```no-highlight
Started POST "/books" for 127.0.0.1 at 2019-03-21 10:26:20 -0400
Processing by BooksController#create as HTML
  Parameters: {"utf8"=>"✓", "authenticity_token"=>"J4d4+QxteoTzmoHWFLDOAGTRnZnWTCLujlGQidriRXQ=", "book"=>{"author"=>"Dr. Seuss", "title"=>"Green Eggs and Ham"}, "commit"=>"Create Book"}
   (0.1ms)  begin transaction
  SQL (0.4ms)  INSERT INTO "books" ("author", "created_at", "title", "updated_at") VALUES (?, ?, ?, ?)  [["author", "Dr. Seuss"], ["created_at", Fri, 21 Mar 2014 14:26:20 UTC +00:00], ["title", "Green Eggs and Ham"], ["updated_at", Fri, 21 Mar 2014 14:26:20 UTC +00:00]]
   (0.7ms)  commit transaction
Redirected to http://localhost:3000/books/7
Completed 302 Found in 6ms (ActiveRecord: 1.2ms)
```

This log is telling us that when we clicked "Create Book", an HTTP POST request was sent to the `/books` path, and that this request was processed by the `create` action on the `BooksController`. It also shows us that the values we supplied were sent as part of the parameters hash:

```no-highlight
Parameters: {"utf8"=>"✓", "authenticity_token"=>"J4d4+QxteoTzmoHWFLDOAGTRnZnWTCLujlGQidriRXQ=",
"book"=>{"author"=>"Dr. Seuss", "title"=>"Green Eggs and Ham"}, "commit"=>"Create Book"}
```

And that a new record was inserted into our database:

```no-highlight
SQL (0.4ms)  INSERT INTO "books" ("author", "created_at", "title", "updated_at") VALUES (?, ?, ?, ?)
[["author", "Dr. Seuss"], ["created_at", Fri, 21 Mar 2014 14:26:20 UTC +00:00],
["title", "Green Eggs and Ham"], ["updated_at", Fri, 21 Mar 2014 14:26:20 UTC +00:00]]
```

#### Using `form_for`

Let's take a closer look at how `form_for` works. At the top of the form, you see the `form_for` invocation:

```no_highlight
<%= form_for(@book) do |f| %>
```

Let's first take the argument passed into the `form_for` invocation: `book`. This argument informs several aspects of the form, including:

**The fields that can be included in the form.** `book` does not have an `:isbn_number` attribute, for example, so if we added `f.text_field :isbn_number` to our form, we should see an error when the form is rendered by the controller.

**The path and HTTP verb the form uses.** Recall that the form partial is used in two places: once for creating new book instances, and once when we need to edit or update existing book instances. In the case of creating a new book, we want to generate a `POST /books` request. In the case of updating a book, we want to generate a `PATCH  /books/1` request, where we are updating the attributes of the book with ID 1. If `book` is already persisted in the database, the form will submit a PUT or PATCH request to `/books/:id`, whereas it will submit a POST to `/books` if the record is not persisted.

*Note:* The [`method`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method) field in an HTML form only supports the GET and POST HTTP verbs. HTML forms do not support PUT, PATCH, and DELETE HTTP verbs. Despite these verbs being a part of the HTTP protocol, they have not until recently been put to significant use. To handle this, Rails builds in a way to emulate a PUT, PATCH, and DELETE HTTP requests. This is all managed for you via the `form_for` invocation.

Now let's look at the `|f|`. The `form_for` method requires that a block be passed to it. In this case, the block is supplied an argument `f` that is the current form object. We can invoke **instance methods** on this object to build labels, text fields, textareas, and other inputs:

```ruby
# label and text_field are instance methods of the form object
f.label :name_of_field
f.text_field :name_of_field
```

**Note on labels**: Let's say that the name of our field is `book.` We would use
```ruby
f.label :book
f.text_field :book
```
Rails is smart and knows that we don't want our users to see "book" as the label -- it will capitalize it to "Book". But what if we want our form to display a label of "Awesome Books"? We can override the default value,

```ruby
f.label :book, "Awesome Books"
f.text_field :book
```
and go about our business.

#### Convention Over Configuration

When calling on the `form_for` method to construct the HTML for a form for a new book, we are reaping the benefits of the "convention over configuration" paradigm. The idea here is, if we follow _convention_, we get functionality for free.

Here is what a call to `form_for` could look like:

```no_highlight
<%= form_for @book, as: :post, url: books_path, html: { class: "new_book", id: "new_book" } do |f| %>
```

The HTML generated would be identical to what `form_for book` would provide. In this example, we are specifying the following:

* the **HTTP verb** (`as: :post`)
* the **path** we will send a HTTP request to (`url: books_path`), with the call to the `books_path` helper, being evaluated to `"/books"`
* the `class` attribute of the `form` tag (`html: { class: "new_book" }`)
* the `id` attribute of the `form` tag (`html: { id: "new_book" }`)

These are all conventions. A HTTP request `POST /books` is a RESTful way of saying we want to create a new book resource. Adding the class and id attributes helps us as developers when it comes to styling, as well as selecting this form element using JavaScript. All of this convention is wrapped up in the `form_for` method.

### External Resources

* [HTML forms guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)
* [Rails Guides Form Helpers](http://guides.rubyonrails.org/form_helpers.html)
* [How do forms with PATCH, PUT, or DELETE methods work?](http://guides.rubyonrails.org/form_helpers.html#how-do-forms-with-patch-put-or-delete-methods-work-questionmark)
