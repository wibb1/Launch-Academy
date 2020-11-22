ENV["RACK_ENV"] ||= "test"
require "rspec"
require "capybara/rspec"
require "csv"

require_relative "../server"

Capybara.app = Sinatra::Application

RSpec.configure do |config|
  config.before(:suite) do
    CSV.open('articles.csv', 'w') { |file| file.puts(["title", "description", "url"]) }
  end

  config.after(:each) do
    CSV.open('articles.csv', 'w') { |file| file.puts(["title", "description", "url"]) }
  end
end
