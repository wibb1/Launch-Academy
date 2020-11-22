ENV["RACK_ENV"] ||= "test"
require "rspec"
require "capybara/rspec"
require "capybara/poltergeist"
require_relative '../server'

Dir[__dir__ + '/support/*.rb'].each { |file| require_relative file }

set :environment, :test
set :database, :test

Capybara.app = Sinatra::Application
Capybara.javascript_driver = :poltergeist
