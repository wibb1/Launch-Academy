require_relative "ingredient"

class Container
  attr_reader :weight, :maximum_holding_weight, :ingredients

  def initialize (weight, maximum_holding_weight)
    @weight = weight
    @maximum_holding_weight = maximum_holding_weight
    @ingredients = []
  end

  def fill_with_ingredient(ingredient)
    count_down = (@maximum_holding_weight / ingredient.weight)
    while count_down > 0
      @ingredients.push(ingredient)
      count_down -= 1
      @weight += ingredient.weight
    end
    @weight = @weight.round
    
  end

  def which_ingredient
    @ingredients[0].name
  end

  def how_many_ingredients
    @ingredients.count
  end

  def remove_one_ingredient
    @ingredients.shift
  end

  def empty
    @ingredients = []
  end
end
