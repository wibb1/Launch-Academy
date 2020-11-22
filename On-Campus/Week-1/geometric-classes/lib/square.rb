class Square
  attr_reader :width, :length, :x, :y

  def initialize(side, x = 0, y = 0)
    @length = side
    @width = side
    @x = x
    @y = y
    @left = x
    @right = x + side
    @bottom = y
    @top = y + side
  end

  def diameter
    Math.sqrt(@length * @length + @width * @width)
  end

  def perimeter
    (@length + @width) * 2
  end

  def area
    @length * @width
  end

  def contains_point? (x, y)
    if x >= @left && x < @right && y >= @bottom && y < @top
      true
    else
      false
    end
  end
end
