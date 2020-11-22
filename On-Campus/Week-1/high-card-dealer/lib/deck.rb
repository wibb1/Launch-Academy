require_relative "card"

class Deck
  SUITS = ['♦', '♣', '♠', '♥']
  RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
  
  def initialize
    @cards = build_deck
    @hand = []
  end

  attr_reader :hand, :cards

  def build_deck
    cards = []
    SUITS.each do |suit|
      RANKS.each do |rank|
        cards << Card.new(rank, suit)
      end
    end
    puts "Deck created!"
    cards.shuffle
  end

  def deal
    @cards.pop(4)
  end
end
