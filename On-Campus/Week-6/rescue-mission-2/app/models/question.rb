# - Step 3 This model is being told by the CONTROLLER to get all the questions 
    # ApplicationRecord is inheritance, adding all the actions to our model so, like most trust fund babies, we don't have to do anything to make this work. All the work is done for us.

class Question < ApplicationRecord
    has_many :answers

    validates :title, length: { minimum: 20, maximum: 50 }, presence: true
    validates :description, length: { minimum: 50 }, presence: true
end

# - Step 4 this will access the appropriate data from our table and turn it into a Ruby object
    #  - Step 5 An example of the Ruby object that is returned to the CONTROLLER is below
            # [#<Question:0x00007f882ac776d0
            #   id: 1,
            #   title: "Sample Question",
            #   description: "Sample Description",
            #   created_at: Tue, 14 Jul 2020 19:42:06 UTC +00:00,
            #   updated_at: Tue, 14 Jul 2020 19:42:06 UTC +00:00>]