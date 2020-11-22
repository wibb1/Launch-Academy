class BoundingBox
  attr_reader :x, :y, :width, :height, :left, :right, :top, :bottom
  
  def initialize (x, y, width, height)
    @x =x
    @y = y
    @width = width
    @height = height
    @left = x
    @right = x + width
    @bottom = y
    @top = y + height
  end

  def contains_point?(x, y)
    if x >= @left && x <= @right && y >= @bottom && y <= @top
      true
    else
      false
    end
  end
end
