ENV["RACK_ENV"] ||= "test"
require "rspec"
require "capybara/rspec"
require "csv"

require_relative "../server"

Capybara.app = Sinatra::Application

RSpec.configure do |config|
  config.before(:suite) do
    CSV.open('movies_test.csv', 'w') { |file| file.puts(["title, release_year, runtime"]) }
  end

  config.after(:each) do
    CSV.open('movies_test.csv', 'w') { |file| file.puts(["title, release_year, runtime"]) }
  end
end
