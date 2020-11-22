class Game
  attr_reader :row, :column

  def initialize(player_1, player_2)
    @player_1 = player_1
    @player_2 = player_2
    @winner = nil
    @tie = nil
    @row = nil
    @column = nil
  end

  def play_game
    count = 1
    while winner.nil? && tie.nil?  && count < 10
      if count%2
        player_input(@player_2)
        player_move_check(@player_2)
        player_output(@player_2)    
      else
        player_input(@player_1)
        player_move_check(@player_1)
        player_output(@player_1)
      end
      count += 1
    end
  end

  def prompt(prompt_text)
    print(prompt_text)
    gets
  end

  def player_move_check(current_player)
    if [0..2].include?(row) && [0..2].include?(column) && @board.player_move(row, column, current_player.symbol)
   
  end

  def player_input(curent_player)
    row = self.prompt("#{current_player.name} please select a row starting from the top - either 1, 2, or 3")
    column = self.prompt("#{current_player.name} please select a column starting from the left - either 1, 2, or 3")
    @row = row -1
    @column = column -1    
  end

  def player_move_output
    @board.player_move(row, column, current_player.symbol)
    return "Nice Move #{current_player.name}!"
  end

end
