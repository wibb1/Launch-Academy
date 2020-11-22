class MagicalCreature
  attr_reader :name, :magical_ability, :age, :url

  def initialize(name, magical_ability, age=nil, url)
    @name = name
    @magical_ability = magical_ability
    @age = age
    @url = url
  end

  def ancient?
    @age > 200
  end
  
end