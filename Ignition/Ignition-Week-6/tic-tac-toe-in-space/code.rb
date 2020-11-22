def print_grid(board)
  board.each_with_index do |group, count|
    group.each_with_index do |tic, id| 
      if id < 2
        if tic == nil
          print "   |"
        else
          print " #{tic} |"
        end
      else
        puts " #{tic}"
      end
    end
    if count < 2
      puts "-----------"
    end
  end
  puts
end

board_a = [
  ['x','o','x'],
  ['x', nil, 'o'],
  ['x', 'o', nil],
]

board_b = [
  [nil,'o','x'],
  ['x', 'o', nil],
  ['x', 'o', nil],
]
puts "***  Board A  ***"
print_grid(board_a)
puts "***  Board B  ***"
print_grid(board_b)