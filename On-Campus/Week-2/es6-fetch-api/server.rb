require "sinatra"
require "sinatra/json"
require "json"

require "sinatra/reloader" if development?
require "pry" if development? || test?

set :bind, '0.0.0.0'  # bind to all interfaces

CURRENT_FILE_PATH = File.dirname(__FILE__) #Handy way to get the file path!!!

def parsed_books_json_data #books needs to change
  data = File.read(CURRENT_FILE_PATH + "/books.json") #books.json needs to change
  JSON.parse(data)
end

def get_next_book_id #way to get the id of a new item to add to the list - descriptor needs to change throughout
  books = parsed_books_json_data["books"] 
  book_with_highest_id = books.max_by { |book| book["id"] }
  highest_book_id = book_with_highest_id["id"]
  highest_book_id + 1
end

def update_books_json_data(books)
  data = { books: books }
  json_formatted_data = JSON.pretty_generate(data, indent: '  ')
  File.write(CURRENT_FILE_PATH + '/books.json', json_formatted_data)
end

before do
  headers({ "Access-Control-Allow-Origin" => "*" })
end

get "/" do
  erb :index
end

get "/test" do
  status 200
  "Hello world"
end

get "/test_error" do
  status 500
end

get "/books.json" do
  status 200
  json parsed_books_json_data
end

post "/books.json" do
  parsed_data = JSON.parse(request.body.read)
  book_name = parsed_data["book"]["name"]
  if !book_name.empty?
    book = {
      id: get_next_book_id,
      name: book_name
    }
    books = parsed_books_json_data["books"]
    books.push(book)
    update_books_json_data(books)

    status 201
    json({ book: book })
  else
    status 422
    json({ name: ["Can't be blank"] })
  end
end
