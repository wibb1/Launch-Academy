require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "pry" if development? || test?

set :bind, '0.0.0.0'

def movies_array
  JSON.parse(File.read('./data/movies.json'))
end

def add_to_movies(new_movie)
  existing_movies = JSON.parse(File.read('./data/movies.json'))
  new_movie["id"] = existing_movies.last["id"] + 1
  existing_movies.push(new_movie)

  File.write('./data/movies.json', JSON.pretty_generate(existing_movies))
  new_movie
end

get '/api/v1/movies' do
  json movies_array
end

post '/api/v1/movies' do
  json add_to_movies(JSON.parse(request.body.read))
end

get '*' do
  erb :home
end
