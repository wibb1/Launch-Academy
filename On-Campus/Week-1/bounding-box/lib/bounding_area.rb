require_relative '../lib/bounding_box'

class BoundingArea
  attr_reader :array

  def initialize (array)
    @box_array = array
  end

  def boxes_contain_point?(x, y)
    if x == 0.0 && y == 0.0
      bool = false
    else
      @box_array.each do |box| 
        if box.contains_point?(x, y) || bool == true
          bool = true
        else 
          bool = false
        end
      end
    end
    return bool
  end
end

