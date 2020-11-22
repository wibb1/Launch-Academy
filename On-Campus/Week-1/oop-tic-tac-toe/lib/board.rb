class Board
  attr_reader :board

  def initialize
    @board = [[nil,nil,nil],[nil,nil,nil],[nil,nil,nil]]
  end

  def player_move(row, column, symbol)
    @board[row][column] = symbol
  end

  def space_value(row, column)
    @board[row][column]
  end
  
end

