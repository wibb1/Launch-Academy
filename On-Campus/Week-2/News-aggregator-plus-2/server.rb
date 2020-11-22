require 'sinatra'
require 'pry'
require 'csv'


get '/' do
  redirect "/articles"
end

get '/articles' do

  @articles = []
  CSV.foreach("articles.csv", headers: true) do |row|
    article = row.to_h
    @articles.push(article)
  end
    
  erb :articles

end

get '/articles/new' do
  
  erb :new
end