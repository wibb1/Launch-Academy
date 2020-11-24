require "sinatra"
require "sinatra/json"
require "json"
require "sinatra/reloader" if development?
require "pry" if development? || test?

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")

CURRENT_FILE_PATH = File.dirname(__FILE__)

def read_theories
  JSON.parse(File.read("theories.json"))
end

before do
  headers({ "Access-Control-Allow-Origin" => "*" })
end

get "/" do
  erb :home
end

get "/api/v1/theories" do
  theories = read_theories

  content_type :json
  json theories
end

post "/api/v1/theories" do
  current_theories = read_theories

  theory = JSON.parse(request.body.read)
  theory["id"] = current_theories.last["id"] + 1

  current_theories << theory
  File.write("theories.json", JSON.pretty_generate(current_theories))

  content_type :json
  status 201
  json theory
end

# If the path does not match any of the above routes, render the erb page.
get "*" do
  erb :home
end
