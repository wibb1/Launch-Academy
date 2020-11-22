require 'pry'

class Circle
attr_reader :radius, :x, :y

  def initialize (radius, x = 0, y = 0)
    @radius = radius
    @x = x
    @y = y
  end
  
  def diameter
    @radius * 2
  end

  def area
    @radius * @radius * Math::PI
  end

  def perimeter
    2 * Math::PI * @radius
  end
end
