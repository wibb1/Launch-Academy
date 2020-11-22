require_relative 'deck'

require 'pry' 

class Hand
  def initialize(cards)
    # Your def initialize is taking in an array of cards as an argument

    @cards = cards
  end

  def calculate_hand
    sum = 0
    @cards.each do |card|
      if ["J", "Q", "K"].include?(card.rank)
        sum += 10
      elsif card.rank == "A"
        if sum + 11 > 21
          sum += 1
        else
          sum +=11
        end
      else
        sum += card.rank
      end
    end
    return sum
    # Your code here after writing tests
    # Think about what this method needs to do
  end

  
end
