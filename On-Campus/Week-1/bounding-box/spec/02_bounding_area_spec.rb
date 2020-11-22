require_relative '../lib/bounding_area'
require_relative '../lib/bounding_box'

RSpec.describe BoundingArea do
  describe '#boxes_contain_point?' do
    it 'is always false for an empty bounding area' do
      empty_area = BoundingArea.new([])
      expect(empty_area.boxes_contain_point?(0.0, 0.0)).to eq(false)
    end

    it 'is true if the point is contained within one of the rects' do
      bottom_box = BoundingBox.new(-3.0, -3.0, 2.0, 2.0)
      middle_box = BoundingBox.new(0.0, 0.0, 2.0, 1.0)
      top_box = BoundingBox.new(2.0, 1.0, 3.0, 4.0)

      area = BoundingArea.new([middle_box, top_box])

      expect(area.boxes_contain_point?(0, 0.5)).to eq(true)
      expect(area.boxes_contain_point?(3.0, 4.0)).to eq(true)

      another_area = BoundingArea.new([bottom_box, top_box])

      expect(another_area.boxes_contain_point?(-2.5, -2.0)).to eq(true)
      expect(another_area.boxes_contain_point?(3.0, 3.0)).to eq(true)
    end

    it 'is false if the point is outside of all of the rects' do
      bottom_box = BoundingBox.new(-3.0, -3.0, 2.0, 2.0)
      middle_box = BoundingBox.new(0.0, 0.0, 2.0, 1.0)
      top_box = BoundingBox.new(2.0, 1.0, 3.0, 4.0)

      area = BoundingArea.new([middle_box, top_box])

      expect(area.boxes_contain_point?(0.0, 3.0)).to eq(false)
      expect(area.boxes_contain_point?(6.0, 4.0)).to eq(false)
      expect(area.boxes_contain_point?(-2.0, -2.5)).to eq(false)

      another_area = BoundingArea.new([bottom_box, top_box])

      expect(another_area.boxes_contain_point?(-9.0, 3.0)).to eq(false)
      expect(another_area.boxes_contain_point?(-9.0, -9.0)).to eq(false)
      expect(another_area.boxes_contain_point?(0, 0.5)).to eq(false)
    end
  end
end
