require_relative "../../lib/airplane"

describe Airplane do
  describe "#initialization" do
    let(:my_plane) { Airplane.new("cesna", 10, 150) }
    it "has a type attribute equal to cesna" do
      expect(my_plane.type).to eq("cesna")
    end

    it "has a wing_loading attribute equal to 10" do
      let(:my_plane) { Airplane.new("cesna", 10, 150) }
      expect(my_plane.wing_loading).to eq(10)
    end

    it "has a horsepower attribute equal to 150" do
      let(:my_plane) { Airplane.new("cesna", 10, 150) }
      expect(my_plane.horsepower).to eq(150)
    end

  end

  describe "#start" do
    it "has a started attribute equal to false" do
      expect(my_plane.started).to eq(false)
    end

    it "after my_plane.start it has a started attribute equal to true" do
      my_plane.start
      expect(my_plane.started).to eq(true)
# need to have something that tests output    
    end
  end

  describe "#land" do
    expect(my_plane.landed).to eq(true)
    
# need to have something that tests output   
  end

  describe "#takeoff" do
    expect(my_plane.landed).to eq(true)
    my_plane.takeoff
    expect(my_plane.landed).to eq(false)

  end
end
