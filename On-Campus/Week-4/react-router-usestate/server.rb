require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "pry" if development? || test?

set :bind, '0.0.0.0'

def cereal_array
  cereal = File.read('./data/cereal.json')
  JSON.parse(cereal)
end

def milk_array
  milk = File.read('./data/milk.json')
  JSON.parse(milk)
end

def selected_cereal(id, cereals)
  selected_cereal = cereals.find { |cereal| cereal["id"] == id }
end

def selected_milk(id, milks)
  selected_milk = milks.find { |milk| milk["id"] == id }
end

get '/' do
  erb :home
end

get '/cereals/:id' do
  erb :home
end

get '/api/v1/cereals' do
  json cereal_array
end

get '/api/v1/cereals/:id' do
  selected_cereal_id = params[:id].to_i
  json selected_cereal(selected_cereal_id, cereal_array)
end

get '/api/v1/milks' do
  json milk_array
end

get '/api/v1/milks/:id' do
  selected_milk_id = params[:id].to_i
  json selected_milk(selected_milk_id, milk_array)
end

get '*' do
  erb :home
end
