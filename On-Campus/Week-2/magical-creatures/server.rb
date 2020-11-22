require "sinatra"
require "pry" if development? || test?
require "sinatra/reloader" if development?
require_relative "spec/models/MagicalCreature.rb"

set :bind, '0.0.0.0'  # bind to all interfaces

# The MAGICAL_CREATURES variable is an array of hashes, and can be accessed from an of your routes.
MAGICAL_CREATURES = [
  {
    name: "unicorn",
    ability: "Its horn is said to have the power to render poisoned water potable and heal sickness.",
    age: 140,
    url: "images/unicorn.jpg"
  },
  {
    name: "dragon",
    ability: "Breathes fire and has a hide of scales that is near impenetrable.",
    age: 587,
    url: "images/dragon.gif"
  },
  {
    name: "phoenix",
    ability: "When it is old and weary, its body ignites in flame and it arises anew from the ashes of its predecessor.",
    age: nil,
    url: "images/phoenix.webp"
  }
]

get '/' do
  
  erb :home
end

get '/creatures' do
  @creatures = []
  MAGICAL_CREATURES.each do |creature|
    if creature[:age] == nil
      creature_age = "undefinable"
    else
      creature_age=creature[:age]
    end
    creature_new = MagicalCreature.new(creature[:name],creature[:ability],creature_age,creature[:url])
    @creatures.push(creature_new)
  end

  erb :creatures
end

get '/creatures/:creature_name' do
  MAGICAL_CREATURES.each do |creature|
    if creature[:name] = params["creature_name"]
      if creature[:age] == nil
        creature_age = "undefinable"
      else
        creature_age=creature[:age]
      end
      @creature = MagicalCreature.new(creature[:name],creature[:ability],creature_age,creature[:url])
    end
    binding.pry
    return @creature
  end
  
  erb :show
end
