class Person
  def initialize(name, middle_name = nil, last_name = nil)
    if last_name.nil?
      full_name = name.split(" ")
      @first_name = full_name[0]
      if full_name.length === 3
        @middle_name = full_name[1]
      end
      @last_name = full_name.last

      
    else
     @first_name = first_name
      @middle_name = middle_name
     @last_name = last_name
   
    end
  end
end


