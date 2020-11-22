class Exam
  attr_reader :title, :due_date, :assigned_to
  attr_writer :assigned_to, :grade

  def initialize(title, due_date)
    @title = title
    @due_date = due_date
    @assigned_to = nil
    @grade = nil
  end

  def assigned_to(name)
    @assigned_to = name
  end

  def grade
    @grade
  end

end  
