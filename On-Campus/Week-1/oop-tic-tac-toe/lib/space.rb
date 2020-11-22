class Space
  attr_accessor :player

  def symbol
    if player.nil?
      "-"
    else
      player.symbol
    end
  end
end