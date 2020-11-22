require "sinatra"

require "sinatra/reloader" if development?
require "pry" if development? || test?
require "csv"

set :bind, '0.0.0.0'  # bind to all interfaces
