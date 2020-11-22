class Cage
attr_accessor :animal

  def initialize
    @animal = nil
  end

  def empty?
    animal == nil
  end

end