require_relative "deck"

class Hand
    attr_reader :player_cards, :value
   
    def initialize(deck_hand)
        @player_cards = deck_hand
        @value = values
    end

    def show_hand
        hand = ""
        @player_cards.each do |card|
            hand = hand + card.rank.to_s + card.suit + ", "
        end
        return hand
    end

    def values
        face_ranks = ['J', 'Q', 'K', 'A']
        @value = 0
        sum = 0
        @player_cards.each do |card|

            if face_ranks.include?(card.rank) 
                sum += face_ranks.index(card.rank) + 11
            else
                sum += card.rank
            end
        end
        return sum
    end
end