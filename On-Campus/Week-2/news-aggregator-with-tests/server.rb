require "sinatra"

require "sinatra/reloader" if development?
require "pry" if development? || test?
require "csv"

set :bind, '0.0.0.0'  # bind to all interfaces


get '/' do
  redirect '/articles' #simple redirect
end

get '/articles' do
  @articles = CSV.readlines("articles.csv", headers: true) #CSV call CHANGE CSV NAME
  
  erb :articles
end

get '/articles/new' do #Goes to site

  erb :new
end

post '/articles/new' do #GETS INFO FROM FORM IN NEW.ERB AND POST TO CSV FILE 
  if params["title"].strip.empty? || params["description"].strip.empty? || params["url"].strip.empty? #error message strip allows for more an one space CHANGE PARAMS
    @error = "Please complete all the fields." #error message CHANGE TO FIT

    erb :new

  else
    @error = "" 
    new_row = [params["title"], params["description"], params["url"]] #POST statement NEED TO CHANGE THE PARAMS KEYS
    CSV.open('articles.csv', 'a') do |file| 
      file << new_row
    end
    redirect '/articles'
  end
end
