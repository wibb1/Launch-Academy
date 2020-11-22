require "rspec"
require_relative "../lib/circle"
require 'pry'

DELTA = 0.01

RSpec.describe Circle do
  describe "#initialize" do
    it "takes a value for the radius" do
      circle = Circle.new(5)
      expect(circle).to be_a(Circle)
    end

    it "takes an optional values for the center point" do
      circle = Circle.new(5, 1, 2)
      expect(circle).to be_a(Circle)
      expect(circle.x).to eq(1)
      expect(circle.y).to eq(2)
    end

    it "defaults (x, y) to (0, 0) if not provided" do
      circle = Circle.new(5)
      expect(circle.x).to eq(0)
      expect(circle.y).to eq(0)
    end
  end

  describe "#radius" do
    it "returns the value for radius" do
      circle = Circle.new(5)
      expect(circle.radius).to eq(5)
    end
  end

  describe "#diameter" do
    it "returns 10 when the radius is 5" do
      circle = Circle.new(5)
      expect(circle.diameter).to eq(10)
    end

    it "returns 20 when the radius is 10" do
      circle = Circle.new(10)
      expect(circle.diameter).to eq(20)
    end

    it "returns 0.5 when the radius is 0.25" do
      circle = Circle.new(0.25)
      expect(circle.diameter).to eq(0.5)
    end
  end

  describe "#area" do
    it "returns 314.16 when radius is 10" do
      circle = Circle.new(10)
      expect(circle.area).to be_within(DELTA).of(314.16)
    end

    it "returns 12.57 when radius is 2" do
      circle = Circle.new(2)
      expect(circle.area).to be_within(DELTA).of(12.57)
    end

    it "returns 0.785 when radius is 0.5" do
      circle = Circle.new(0.5)
      expect(circle.area).to be_within(DELTA).of(0.785)
    end
  end

  describe "#perimeter" do
    it "returns 6.283 when the radius is 1" do
      circle = Circle.new(1)
      expect(circle.perimeter).to be_within(DELTA).of(6.28)
    end

    it "returns 12.57 when the radius is 2" do
      circle = Circle.new(2)
      expect(circle.perimeter).to be_within(DELTA).of(12.57)
    end
  end
end
