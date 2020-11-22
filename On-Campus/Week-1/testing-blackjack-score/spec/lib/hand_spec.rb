require "spec_helper"

describe Hand do
  # These UTF-8 characters will be useful for making different hands:
  # '♦', '♣', '♠', '♥'
  let(:number_cards) { Hand.new([Card.new("♥",10), Card.new("♥", 8)])}
  let(:blackjack) { Hand.new([Card.new("♦","A"), Card.new("♥","J")]) }
  let(:double_aces) { Hand.new([Card.new("♦","A"), Card.new("♦","A")]) }
  let(:hand_bust) { Hand.new([Card.new("♦",10), Card.new("♦", 2), Card.new("♦", "A"), Card.new("♦", "J")]) }
  let(:five_card) { Hand.new([Card.new("♦", 2), Card.new("♦", 5), Card.new("♦", 4), Card.new("♦", 3), Card.new("♦", "A")]) }
  # You can add more sample hands using this same syntax, with a different variable name!

  describe "#calculate_hand" do
    # We have included some example tests below. Change these once you get started!
    it "sums the values of the cards in the hand" do
      expect(number_cards.calculate_hand).to eq(18)
      expect(blackjack.calculate_hand).to eq(21)
      
      expect(hand_bust.calculate_hand).to eq(23)
      expect(five_card.calculate_hand).to eq(15)
    end

    it "accurately accounts for Aces" do
      expect(double_aces.calculate_hand).to eq(12)
    end

    

    it "passes" do
      # Use the RSpec keyword `expect`, as it appears below, to test your assertions
      expect(1).to eq(1)
    end

    it "fails" do
      expect(false).to eq tr
    end

    # Add your remaining tests here.

  end
end
