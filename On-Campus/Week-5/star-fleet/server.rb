require 'sinatra'
require_relative 'config/application'

set :bind, '0.0.0.0'  # bind to all interfaces

enable :sessions

# Any classes you add to the models folder will automatically be made available in this server file

get '/' do
  redirect '/starships'
end

get '/starships' do
  @starships = Ship.all

  erb :'starships/index'
end

get '/starships/new' do

  erb :'starships/new'
end

post '/starships/new' do
  @name=params["name"]
  @ship_class=params["ship_class"]
  @location=params["location"]

  @ship = Ship.new(params)

  if @ship.save
    flash[:notice] = 'Ship was Registered!' #must have lines 19-25 in the 
    redirect '/starships'
  else
    flash.now[:notice] = @ship.errors.full_messages.to_sentence
    erb:'starships/new'
  end

end

get '/starships/:id' do
  @starship = Ship.find(params["id"])

  erb :'starships/show'
end

post '/starships/:id' do
  @starship_id = params["id"]
  @first_name = params["first_name"]
  @last_name = params["last_name"]
  @secialty = params["specialty"]
  
  @member = Member.new(params)

  if @member.save
    flash[:notice] = 'Crewmember has been saved!'
    redirect '/crew-members'
  else
    flash.now[:notice] = @member.errors.full_messages.to_sentence
    erb :'starships/:id'
  end
end


get '/crew-members' do
@crewmembers = Crewmembers.all

  erb :'crewmembers/index'
end

