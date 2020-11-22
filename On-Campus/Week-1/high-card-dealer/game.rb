require_relative "lib/deck"
require_relative "lib/hand"

puts "GAME START!"

#Project worked on by Will Campbell & Brian Manhard. No plagerism!

my_deck = Deck.new

player_1_hand = Hand.new(my_deck.deal)
player_2_hand = Hand.new(my_deck.deal)
puts "Player 1's hand is " + player_1_hand.show_hand
puts "Player 1's hand value is " +player_1_hand.value.to_s
puts "Player 2's hand is " + player_2_hand.show_hand 
puts "Player 2's hand value is " +player_2_hand.value.to_s

if player_1_hand.value > player_2_hand.value
    puts "Player 1 wins!"
elsif player_1_hand.value == player_2_hand.value
    puts "Players tied with identical scores."
else
    puts "Player 2 wins!"
end