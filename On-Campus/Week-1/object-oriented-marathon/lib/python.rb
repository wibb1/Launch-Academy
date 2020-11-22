class Python
  attr_reader :name

  def initialize(name)
    @name = name
  end

  include Reptile
  

  def speak
    "SSSSssssss..."
  end
end