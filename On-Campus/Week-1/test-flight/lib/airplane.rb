class Airplane
  attr_reader :type, :wing_loading, :horsepower, :started, :landed
  attr_writer :started, :landed

  def initialize(type, wing_loading, horsepower)
    @type = type
    @wing_loading = wing_loading
    @horsepower = horsepower
    @started = false
    @landed = true
  end

  def start
    if started
      puts "airplane already started"
    else
      @started = true
      puts "airplane started"
    end
  end

  def takeoff
    @landed = false
    puts "airplane launched"
  end

  def land
    @landed = true
    puts "airplane landed"
  end

end