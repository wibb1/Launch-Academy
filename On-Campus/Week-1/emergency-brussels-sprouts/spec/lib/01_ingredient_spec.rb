require_relative "../../lib/ingredient"


describe Ingredient do
  let(:ingredient) { Ingredient.new("Cheesy Poof", 0.0005) }

  describe ".new" do
    it "takes a name and weight as arguments" do
      expect(ingredient).to be_a(Ingredient)
    end
  end

  describe "#name" do
    it "has a reader for name" do
      expect(ingredient.name).to eq("Cheesy Poof")
    end

    it "does not have a writer for name" do
      expect { ingredient.name = "Brussels Sprouts" }.to raise_error(NoMethodError)
    end
  end

  describe "#weight" do
    it "has a reader for weight" do
      expect(ingredient.weight).to eq(0.0005)
    end

    it "does not have a writer for weight" do
      expect { ingredient.weight = 1 }.to raise_error(NoMethodError)
    end
  end

  describe '.create_from_grams' do
    it 'should create a new ingredient and convert its weight to kg' do
      converted_ingredient = Ingredient.create_from_grams("Cheesy Poof", 0.5)

      expect(converted_ingredient.weight).to eq(0.0005)
    end
  end
end
