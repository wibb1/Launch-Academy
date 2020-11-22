require_relative "../../lib/container"
require_relative "../../lib/ingredient"

describe Container do
  describe ".new" do
    it 'should take weight and maximum holding weight as arguments' do
      container = Container.new(90, 140)
      expect(container).to be_a(Container)
    end
  end

  let(:ingredient) { Ingredient.new("Brussels Sprouts", 0.02) }
  let(:container) { Container.new(90, 140) }

  describe '#weight' do
    it 'should have a reader for weight' do
      expect(container.weight).to eq(90)
    end

    it 'should not have a writer for weight' do
      expect{ container.weight = 5 }.to raise_error(NoMethodError)
    end
  end

  describe '#maximum_holding_weight' do
    it 'should have a reader for maximum_holding_weight' do
      expect(container.maximum_holding_weight).to eq(140)
    end

    it 'should not have a writer for maximum_holding_weight' do
      expect{ container.maximum_holding_weight = 140 }.to raise_error(NoMethodError)
    end
  end

  describe '#ingredients' do
    it 'should have a reader for ingredient' do
      expect(container.ingredients).to eq([])
      expect(container.ingredients).to be_a(Array)
    end
  end

  describe '#fill_with_ingredient' do
    context 'brussels sprouts' do
      it 'should fill the existing container with an ingredient' do
        brussels_sprout = Ingredient.new("Brussels Sprouts", 0.02)
        brussels_sprout_container = Container.new(90, 140)
        brussels_sprout_container.fill_with_ingredient(brussels_sprout)

        expect(brussels_sprout_container.weight).to eq(230)
        expect(brussels_sprout_container.ingredients.count).to be_within(1).of(7000)
        expect(brussels_sprout_container.maximum_holding_weight).to eq(140)
      end
    end

    context 'cheesy poofs' do
      it 'should fill the existing container with an ingredient' do
        cheesy_poof = Ingredient.new("Cheesy Poof", 0.0005)
        cheesy_poof_container = Container.new(10, 20)
        cheesy_poof_container.fill_with_ingredient(cheesy_poof)

        expect(cheesy_poof_container.weight).to eq(30)
        expect(cheesy_poof_container.ingredients.count).to be_within(1).of(40000)
        expect(cheesy_poof_container.maximum_holding_weight).to eq(20)
      end
    end
  end

  describe '#which_ingredient' do
    it 'should return what type of ingredient the container has' do
      container.fill_with_ingredient(ingredient)

      expect(container.which_ingredient).to eq("Brussels Sprouts")
    end
  end

  describe '#how_many_ingredients' do
    it 'should return how many ingredients are in the container' do
      container.fill_with_ingredient(ingredient)

      expect(container.how_many_ingredients).to be_within(1).of(7000)
    end
  end

  describe '#remove_one_ingredient' do
    it 'should remove one ingredient' do
      container.fill_with_ingredient(ingredient)

      container.remove_one_ingredient

      expect(container.ingredients.count).to be_within(1).of(6999)
    end
  end

  describe '#empty' do
    it 'should empty the container completely' do
      container.fill_with_ingredient(ingredient)

      container.empty

      expect(container.how_many_ingredients).to eq(0)
    end
  end
end
