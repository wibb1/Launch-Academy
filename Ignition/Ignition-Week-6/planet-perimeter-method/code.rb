def perimeter(width, height = nil)
  if height.nil?
    width * 4
  else
    2 * width + 2 * height
  end
end
