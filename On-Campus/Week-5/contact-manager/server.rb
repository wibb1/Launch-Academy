require 'sinatra'
require_relative 'config/application'

set :bind, '0.0.0.0'  # bind to all interfaces

enable :sessions

get '/' do
  @contacts = Contact.all
  erb :index
end

get '/contacts/:id' do
  contact = Contact.find(params[:id])
  erb :show
end