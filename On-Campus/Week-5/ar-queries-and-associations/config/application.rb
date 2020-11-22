# For development and testing environments, run the following code
configure :development, :test do
  # Load environment variables from .env file
  require 'dotenv'
  Dotenv.load

  # Load the following libraries
  require 'pry'
end

# For all environments, run the following code
configure do
  # Load the following libraries
  require 'sinatra/activerecord'
  require 'sinatra/flash'

  # Load all .rb files in the app folder
  Dir[File.join(File.dirname(__FILE__), '../app', '**', '*.rb')].each do |file|
    require file
  end

  # Declare the location of the views folder
  set :views, 'app/views'
end


configure :development do
  require "sinatra/reloader"

  Dir[__dir__ + "/../app/**/*.rb"].each do |file|
    # require_relative file
    also_reload file
  end

end
