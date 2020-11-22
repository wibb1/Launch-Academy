### Introduction

In this exercise, we will interact with a web application in order to learn how to create, read, update, and delete (**CRUD**) data with HTTP.

### Learning Goals

- Perform HTTP requests using the `curl` command line utility.
- Perform HTTP GET requests using Ruby's `Net::HTTP` library.

### Getting Started

```no-highlight
$ et get rest-app
$ cd rest-app
$ bundle
```

## The Server and `localhost`

At its core, a browser is an application that is able to send requests to, and process responses from, a server. Let's start a Sinatra server by running `server.rb`, which contains the code we need to run the server:

```no-highlight
$ ruby server.rb
```

 As you browse the internet, your browser is typically interacting with servers hosted elsewhere. However, for development work, we want your browser interacting with servers being run on your machine. To point your browser to a server running locally, you can visit `http://localhost:<port_number>`. In this case, our port is `4567` (this number is a Sinatra default).

Try it out by visiting <http://localhost:4567/messages> in your browser.

Congratulations! You just issued a `GET` request using HTTP! You just asked your server (listening on, i.e., ready to respond to a request from, `localhost:4567`) to `GET` the resource called `messages`.

You should see a list of messages.

```no-highlight
Not all who wander are lost
Do or do not. There is no pry.
highway to the DANGER ZONE
lalalala
minions love banana
I LOVE CATS SO MUCH
the answer is 42
mytest1
omg no php
ヽ༼ຈل͜ຈ༽ﾉ im bad ヽ༼ຈل͜ຈ༽ﾉ
mytest1
hello
(ノ^_^)ノ┻━┻ ┬─┬ ノ( ^_^ノ)
I am the very model of a modern, major Rubyist.
you miss every shot you dont take :)
...
```

What you see on the page is the **response** from our server. In terms of HTTP, we issued a `GET` **request** for the `/messages` resource. The server then **responded** with a list of messages. Essentially, we performed a **read** operation.

We can also issue a request for a specific message. We can do this by visiting `localhost:4567/messages/7`. We basically asked the server: "Please give me message at line number 7". When we do that, we should see the following:

```no-highlight
the answer is 42
```

## HTTP Requests with `curl`

`curl` is a tool that lets us make HTTP requests from the command line, rather than using a browser. We'll use it here to make GET, POST, PATCH, and DELETE requests.

### GETting existing messages

If we want to read the index page of messages, we can tell `curl` to issue a `GET` request.

With your server running in one terminal window, open another terminal window and try the following command:

```no-highlight
$ curl --request GET http://localhost:4567/messages
```

Your terminal should display the response:

```no-highlight
<br/>Not all who wander are lost
<br/>Do or do not. There is no pry.
...
```

**Note**: The line-break `<br/>` tags are present so that each message shows up on a separate line in our web browser.

Likewise, we can issue a `GET` request for a single message.

```no-highlight
$ curl --request GET http://localhost:4567/messages/7
```

This will return

```no-highlight
the answer is 42
```

What's going on in this command?

- We're specifying that we're using the **`curl`** tool (much like how we type `ruby` before specifying the ruby file we want to run in the command line).
- We indicate that we want `curl` to issue an HTTP **`request`**: in this case, a **`GET`** request.
- Then we specify which **resource** we want to `GET` (here, `http://localhost:4567/messages/7`).

### POSTing a New Message

Let's create a new message on the server using `curl`. The command will need to match the following format:

```no-highlight
                                                   "data" flag             value
                                                     ┌──┴──┐         ┌───────┴────────┐
$ curl --request POST http://localhost:4567/messages --data "message=your message, here"
                                                             └──┬──┘
                                                               key
```

Here, we're doing much the same thing we did with the `GET` requests above, but with some additional information. The `--data` flag lets curl know that we have a **body** that should be included in the request. In a `GET` request, we want to read information that the server has. In a `POST` request, we are the ones with information that we want to give the server!

We give that information in the key value pair that follows the data flag. When you run the code above, the server will inform you if you were successful or not.

Point your browser at <http://localhost:4567/messages> to see your new message.

### Updating a Message with PATCH

Let's change the first message. We can do this by performing a `PATCH` request on the URL for the first message.

```no-highlight
$ curl --request PATCH http://localhost:4567/messages/1 --data "message=I am number one thousand"
```

When we issue a `PATCH` request, we aren't creating something new, we're modifying an existing resource. Reloading the page should show your updates!

Notice that we're doing a lot of the same things. We're creating a `request` with the `PATCH` verb, and targeting the specific `message` we're trying to edit. Then we're passing along the `data` of what we want the updated content to be.

### DELETEing a Message

To delete a resource, we issue a `DELETE` request on the URL of the message we would like to delete.

```no-highlight
$ curl --request DELETE http://localhost:4567/messages/25
```

## Ruby's Net::HTTP library

Ruby has a built-in library for communicating with web servers. Let's try reading messages from our web server, programmatically. In `messages.rb`, you'll see the following:

```no-highlight
messages_url = "http://localhost:4567/messages"
uri = URI.parse(messages_url)           # convert the URL string to a URI object
response = Net::HTTP.get_response(uri)  # issue a HTTP GET request
puts response.body                      # print the body of the response
```

This code issues a GET request to our locally running server and retrieves the `/messages` resource. If you run `ruby messages.rb` in your terminal, it should print out the list of messages.

### Communicating with Web Servers

The Internet consists of millions of web servers, each one waiting for you to make a request for the resources they provide. They host information such as the current weather conditions, stock market prices, and even [images from other worlds](https://api.nasa.gov/api.html#apod). The best part is, **all of these servers speak HTTP**.

We can write Ruby code to interact with these web servers. In `weather.rb`, you'll find the following code:

```no-highlight
weather_url = "https://forecast.weather.gov/MapClick.php?lat=42.35&lon=-71.06&FcstType=dwml"
uri = URI.parse(weather_url)            # convert the URL string to a URI object
response = Net::HTTP.get_response(uri)  # issue a HTTP GET request
body = Hash.from_xml(response.body)     # convert XML to a more familiar data type

pp body  # "pretty-print" the hash, i.e., add line breaks and indentation
```

Executing this code will provide us with the current weather data for Boston, MA.

### Wrap up

In this lesson, we practiced creating, reading, updating, and deleting resources using the HTTP protocol.

### External Resources

- [Manual: curl Usage Explained](https://curl.haxx.se/docs/manual.html)
- [Net::HTTP Cheat Sheet](http://www.rubyinside.com/nethttp-cheat-sheet-2940.html)
- [PP Documentation](https://ruby-doc.org/stdlib-2.4.1/libdoc/pp/rdoc/PP.html) (If this page has moved, search ruby-doc.org for `pp`)
