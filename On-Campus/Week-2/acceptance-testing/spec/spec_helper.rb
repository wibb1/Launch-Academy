require 'pry'
require 'rspec'
require 'capybara/rspec'
require 'launchy'

require_relative '../server.rb'

set :environment, :test

Capybara.app = Sinatra::Application