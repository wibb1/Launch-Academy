require 'spec_helper'

describe Player do
  let(:player) { Player.new('Wonder Woman', 'X') }

  it 'can be initialized with a name' do
    expect(player).to be_a Player
  end

  describe '#name' do
    it 'has a reader for name' do
      expect(player.name).to eq 'Wonder Woman'
    end
  end

  describe '#symbol' do
    it 'has a reader for symbol' do
      expect(player.symbol).to eq 'X'
    end
  end
end
