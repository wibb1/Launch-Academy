require 'sinatra'
require 'pry'
require 'csv'


get '/' do
  redirect "/articles"
end

get '/articles' do
  @articles = CSV.readlines("articles.csv", headers: true) 
    
  erb :articles

end

get '/articles/new' do

  erb :new

end

post '/articles/new' do
  if params['title'] == "" || params["description"] == "" || params["url"] == ""
    @error = "Please input data in all fields"
    erb :new
  else
    new_row = [params["title"], params["description"], params["url"]]
    CSV.open("articles.csv", "a") do |row|
      row << new_row
    end
  end
  redirect '/articles'
end

get '/random' do
  
  
  erb :random
end