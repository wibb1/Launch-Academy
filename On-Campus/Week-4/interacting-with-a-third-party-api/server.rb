require "sinatra"
require "sinatra/json"
require "json"
require "sinatra/reloader" if development?
require "pry" if development? || test?
require "faraday"

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")

CURRENT_FILE_PATH = File.dirname(__FILE__)

OPEN_WEATHER_API_KEY = ""

before do
  headers({ "Access-Control-Allow-Origin" => "*" })
end

get "/" do
  erb :home
end

get "/api/v1/forecast" do
  city_name = params[:city_name]

  url = "http://api.openweathermap.org/data/2.5/weather?q=#{city_name}&appid=#{OPEN_WEATHER_API_KEY}"
  api_response = Faraday.get(url)
  parsed_response = JSON.parse(api_response.body)

  status 200
  content_type :json

  json parsed_response
end

# If the path does not match any of the above routes, render the erb page.
get "*" do
  erb :home
end
