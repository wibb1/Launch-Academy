require "rspec"
require "pry"

Dir[File.join(File.dirname(__FILE__), "..", "lib" , "**/*.rb")].each { |f| require f }

RSpec.configure do |config|
  config.filter_run focus: true
  config.run_all_when_everything_filtered = true
end
