class Theater
  def initialize(seats)
    @theater_seats = seats
    @seated_patrons = 0
  end

  def at_capacity?
    if @seated_patrons == @theater_seats
      return true
    else
      return false
    end
  end

  def admit!(sold_tickets=1)
    @seated_patrons = @seated_patrons + sold_tickets
  end
  
  def record_walk_outs!(walkouts=1)
    @seated_patrons = @seated_patrons - walkouts
  end

  attr_reader :theater_seats, :seated_patrons

end

theater1 = Theater.new(20)
puts "After construction"
puts "Seats = #{theater1.theater_seats}"
puts "Patrons = #{theater1.seated_patrons}"
puts
theater1.admit!(20)
puts "After Admit"
puts "Seats = #{theater1.seated_patrons}"
puts "Patrons = #{theater1.theater_seats}"
puts "Theater at capacity = #{theater1.at_capacity?}"
puts
theater1.record_walk_outs!(2)
puts "After walkouts"
puts "Patrons = #{theater1.seated_patrons}"
puts "Seats = #{theater1.theater_seats}"
puts "Theater at capacity = #{theater1.at_capacity?}"


require 'pry'
binding.pry