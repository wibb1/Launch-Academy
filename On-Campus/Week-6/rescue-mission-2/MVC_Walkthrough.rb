#  The USER's Request to the ROUTER will ultimately be answered with an HTML Response from the CONTROLLER - This is our goal.

'ROUTER - File Route'
    # /Users/robp/challenges/rescue-mission/config/routes.rb

# Step 1 - The USER makes a REQUEST for index page
Rails.application.routes.draw do
    root 'homes#index'
    devise_for :users
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
    resources :questions, only: [:index, :show]
  end
  
  # Step 2 Request for :index is sent to CONTROLLER
  
  # List of files to create in order
    #  Refer to Intro to Rails Notes

'CONTROLLER - File Route'
    # /Users/robp/challenges/rescue-mission/app/controllers/questions_controller.rb

# Step 2 - The ROUTER is choosing def index from below

# Step 5 - The MODEL is returning the response to Step 3, where we are saving it is as an instance variable @questions

# Step 7 - The CONTROLLER is receiving the HTML from our VIEW.

class QuestionsController <ApplicationController
    def index
        @questions = Question.all.order(created_at: :desc)
    end

    def show
        @question = Question.find(params[:id])
    end
end

# Step 3 - (-Question.all-) is the call to the MODEL saying, hey I need All the questions
    # .order(created_at: :desc) is the extra flavor for what's being requesting

# Step 6 - The CONTROLLER  is sending the @questions instance variable to our VIEW, specifically /Users/robp/challenges/rescue-mission/app/views/questions/index.html.erb

# Step 8 - The CONTROLLER send the HTML Response back to the USER/client

'MODEL - File Route'
    # /Users/robp/challenges/rescue-mission/app/models/question.rb

# - Step 3 This model is being told by the CONTROLLER to get all the questions 
    # ApplicationRecord is inheritance, adding all the actions to our model so, like most trust fund babies, we don't have to do anything to make this work. All the work is done for us.

class Question < ApplicationRecord
    validates :title, presence: true
    validates :description, presence: true

    # Figure out if it has_many or belong_to something
end
    
    # - Step 4 this will access the appropriate data from our table and turn it into a Ruby object
        #  - Step 5 An example of the Ruby object that is returned to the CONTROLLER is below
                # [#<Question:0x00007f882ac776d0
                #   id: 1,
                #   title: "Sample Question",
                #   description: "Sample Description",
                #   created_at: Tue, 14 Jul 2020 19:42:06 UTC +00:00,
                #   updated_at: Tue, 14 Jul 2020 19:42:06 UTC +00:00>]

'VIEWS - File Route'
    # /Users/robp/challenges/rescue-mission/app/views/questions/index.html.erb

    # Step 6 - Our CONTROLLER is supplying our VIEW with our instance variable, @questions, and it is being pass to/through the HTML template that we have built %>

    # Imp Note - Our VIEW taking an instance variable and converting it to a viewable webpage to the user
    
<h1>Classy Questions</h1>
    
<ul>
  <% @questions.each do |question| %>
    <li><%= link_to question.title, question_path(question) %></li>
  <% end %>
</ul>
    
    # Step 7 - The VIEW passes the completed HTML to our CONTROLLER
    
