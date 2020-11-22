require_relative '../lib/bounding_box'

RSpec.describe BoundingBox do
  it 'has a left edge' do
    box = BoundingBox.new(5.0, 10.0, 25.0, 50.0)
    expect(box.left).to eq(5.0)
  end

  it 'has a right edge' do
    box = BoundingBox.new(5.0, 10.0, 25.0, 50.0)
    expect(box.right).to eq(30.0)
  end

  it 'has a bottom edge' do
    box = BoundingBox.new(5.0, 10.0, 25.0, 50.0)
    expect(box.bottom).to eq(10.0)
  end

  it 'has a top edge' do
    box = BoundingBox.new(5.0, 10.0, 25.0, 50.0)
    expect(box.top).to eq(60.0)
  end

  it 'has a width' do
    box = BoundingBox.new(5.0, 10.0, 25.0, 50.0)
    expect(box.width).to eq(25.0)
  end

  it 'has a height' do
    box = BoundingBox.new(5.0, 10.0, 25.0, 50.0)
    expect(box.height).to eq(50.0)
  end

  describe '#contains_point?' do
    it 'is true for points within the box' do
      box = BoundingBox.new(5.0, 10.0, 25.0, 50.0)

      expect(box.contains_point?(20.0, 20.0)).to eq(true)

      another_box = BoundingBox.new(-5, -5, 10, 10)

      expect(another_box.contains_point?(0.0, 0.0)).to eq(true)
      expect(another_box.contains_point?(-1.0 , -2.0)).to eq(true)
    end

    it 'is true for points on the edge of the box' do
      box = BoundingBox.new(5.0, 10.0, 25.0, 50.0)

      expect(box.contains_point?(5.0, 10.0)).to eq(true)
      expect(box.contains_point?(30.0, 60.0)).to eq(true)

      another_box = BoundingBox.new(-5, -5, 10, 10)

      expect(another_box.contains_point?(-5.0, 5.0)).to eq(true)
    end

    it 'is false for points outside of the box' do
      box = BoundingBox.new(5.0, 10.0, 25.0, 50.0)

      expect(box.contains_point?(0.0, 0.0)).to eq(false)
      expect(box.contains_point?(20.0, 100.0)).to eq(false)
      expect(box.contains_point?(50.0, 20.0)).to eq(false)
      expect(box.contains_point?(-1.0, -2.0)).to eq(false)
      expect(box.contains_point?(-5.0, 5.0)).to eq(false)

      another_box = BoundingBox.new(-5, -5, 10, 10)

      expect(another_box.contains_point?(20.0, 20.0)).to eq(false)
      expect(another_box.contains_point?(5.0, 10.0)).to eq(false)
      expect(another_box.contains_point?(30.0, 60.0)).to eq(false)
      expect(another_box.contains_point?(-1000, -1000)).to eq(false)
    end
  end
end

