class Zoo
  attr_reader :cages, :employees

  def initialize(name, opening_date, closing_date)
    @name = name
    @opening_date = opening_date
    @closing_date = closing_date
    @cages =[]
    initial_cages
    @employees = []
  end

  def initial_cages
    10.times { @cages.push(Cage.new) }
  end

  def add_employee(name)
    @employees.push(name)
  end

  def open?(date)
    date >= @opening_date && date <= @closing_date
  end

  def add_animal(animal)
    count = cages.length
    @cages.each do |cage| 
      if cage.empty?
        cage.animal = animal
        return
      else
        count -= 1
      end 
    end
    if count = 0 
      "Your zoo is already at capacity!"
    end
  end

  def visit
    output = ""
    employees.each do |employee| 
      output += "#{employee.name} waved hello!\n"
    end
    @cages.each do |cage|
      if !cage.empty?
        output += "#{cage.animal.speak}\n"
      end
    end
    output
  end
end
