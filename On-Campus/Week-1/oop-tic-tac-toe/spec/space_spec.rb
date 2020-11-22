require 'spec_helper'

describe Space do
  let(:space) { Space.new }

  it 'is initialized with no player' do
    expect(space).to be_a Space
    expect(space.player).to eq nil
  end

  describe '#player' do
    it 'has an accessor for player' do
      new_player = Player.new('Dan', 'X')
      space.player = new_player
      expect(space.player).to eq new_player
    end
  end

  describe '#symbol' do
    it "returns the player's symbol" do
      new_player = Player.new('Superman', 'X')
      space.player = new_player
      expect(space.symbol).to eq new_player.symbol
    end

    it "returns '-' if there is no player" do
      new_space = Space.new
      expect(new_space.symbol).to eq '-'
    end
  end
end
