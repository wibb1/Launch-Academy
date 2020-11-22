require "spec_helper"

RSpec.describe "Exam" do
  describe %q(

    Instructions
    ------------

    Create an Exam class in `lib/exam.rb`.

    The constructor should take two arguments:
      * The title of the Exam
      * The due date of the Exam

  ) do
    describe "Exam.new" do
      it "takes a title and a due date as arguments" do
        exam = Exam.new("Final", "2015/12/15")
        expect(exam).to be_a(Exam)
      end
    end
  end

  describe %q(

    Writers
    =======

    Being limited to assigning state to our objects on
    construction would make Object-Oriented Programming (OOP)
    quite dull.

    Writers allow us to **change the state** of our objects
    after they have been constructed.

    Instructions
    ------------

    Create an instance variable called `@assigned_to`, which
    is initialized to `nil`.

    Add a writer to the `assigned_to` property of the Exam
    object.

    There are two ways to accomplish this:

    ```
    class Exam
      def initialize(title, due_date)
        @title = title
        @due_date = due_date
        @assigned_to = nil
      end

      def assigned_to=(student)
        @assigned_to = student
      end
    end
    ```

    Again, much like readers, we define writers quite often
    in OOP. Ruby gives us a shortcut for defining these:

    ```
    class Exam
      attr_writer :assigned_to

      def initialize(title, due_date)
        @title = title
        @due_date = due_date
        @assigned_to = nil
      end
    end
    ```

  ) do
    describe "exam.assigned_to=" do
      it "writes to the @assigned_to instance variable" do
        exam = Exam.new("Midterm", "2015/10/05")
        expect { exam.assigned_to = "Samuel" }.
          to_not raise_error
      end
    end
  end

  describe %q(

    Accessors
    =========

    An **accessor** is simply the combination of a reader
    and a writer.

    Instructions
    ------------

    Add an accessor for the `@grade` instance variable.
    The value of this variable should be `nil` upon object
    construction.

    Can you guess the Ruby shortcut for creating an
    accessor?

  ) do

    subject(:exam) { Exam.new("Entrance", "2015/08/15") }

    describe "exam.grade" do
      it "reads the @grade instance variable" do
        expect(exam.grade).to be_nil
      end
    end

    describe "exam.grade=" do
      it "writes to the @grade instance variable" do
        expect { exam.grade = 90 }.to_not raise_error
        expect(exam.grade).to eq(90)
      end
    end
  end
end
