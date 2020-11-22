class Rectangle
  attr_reader :length, :width
  attr_accessor :x, :y

  def initialize(length, width, x = 0, y = 0)
    @length = length
    @width = width
    @x = x
    @y = y
    @left = @x
    @right = @x + @length
    @top = @width + @y
    @bottom = @y
  end

  def area
    @length * @width
  end

  def diagonal
    Math.sqrt(@length * @length + @width * @width)
  end

  def move_right
    @x += 1
  end

  def move_up
    @y += 1 
  end

  def move_left
    @x -= 1
  end

  def move_down
    @y -= 1 
  end

end
