require "rspec"
require_relative "../lib/square"

DELTA = 0.01

RSpec.describe Square do
  describe "#initialize" do
    it "takes a value for the side" do
      square = Square.new(5)
      expect(square).to be_a(Square)
    end

    it "takes optional values for the center point" do
      square = Square.new(5, 1, 2)
      expect(square).to be_a(Square)
      expect(square.x).to eq(1)
      expect(square.y).to eq(2)
    end

    it "defaults (x, y) to (0, 0) if not provided" do
      square = Square.new(5)
      expect(square.x).to eq(0)
      expect(square.y).to eq(0)
    end
  end

  describe "#length" do
    it "returns the value for the length of the square" do
      square = Square.new(5)
      expect(square.length).to eq(5)
    end
  end

  describe "#width" do
    it "returns the value for the width of the square" do
      square = Square.new(5)
      expect(square.width).to eq(5)
    end
  end

  describe "#diameter" do
    it "returns the length of the diameter (also called the 'diagonal') of the square" do
      square = Square.new(5)
      expect(square.diameter).to be_within(DELTA).of(7.071)
    end
  end

  describe "#perimeter" do
    it "returns the value for perimeter" do
      square = Square.new(5)
      expect(square.perimeter).to eq(20)
    end
  end

  describe "#area" do
    it "returns 25 when the side is 5" do
      square = Square.new(5)
      expect(square.area).to eq(25)
    end

    it "returns 100 when the side is 10" do
      square = Square.new(10)
      expect(square.area).to eq(100)
    end
  end

  describe "#contains_point?" do
    it "returns true for a point within the square" do
      square = Square.new(1)
      expect(square.contains_point?(0, 0)).to be(true)
    end

    it "returns true for a point on the edge of a square" do
      square = Square.new(1)
      expect(square.contains_point?(0.5, 0.5)).to be(true)
    end

    it "returns false for a point outside of the square" do
      square = Square.new(1)
      expect(square.contains_point?(4, 3)).to be(false)
      expect(square.contains_point?(1, 0)).to be(false)
      expect(square.contains_point?(0, -1)).to be(false)
      expect(square.contains_point?(-1, 0)).to be(false)
      expect(square.contains_point?(0, 1)).to be(false)
      expect(square.contains_point?(1, 1)).to be(false)
      expect(square.contains_point?(1, -1)).to be(false)
      expect(square.contains_point?(-1, -1)).to be(false)
      expect(square.contains_point?(-1, 1)).to be(false)
    end
  end
end
