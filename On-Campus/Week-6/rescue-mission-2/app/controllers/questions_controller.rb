# Step 2 - The ROUTER is choosing def index from below

# Step 5 - The MODEL is returning the response to Step 3, where we are saving it is as an instance variable @questions

# Step 7 - The CONTROLLER is receiving the HTML from our VIEW.
class QuestionsController <ApplicationController
    def index
        # In order to organize our list by date to be displayed on our Index page, we use .order command here to be sorted before getting iterated through in the Index
        @questions = Question.all.order(created_at: :desc)
        
    end
    
    def show
        # This will be used on our show page, and it will correlate the article matching the id in the url, that's provided by the link in the index
        @question = Question.find(params[:id])
        @answer = Answer.new
        # Below grabbing the answers from @question
            # @question gets .answers from the "has_many :answers" association from our question model
        @answers = @question.answers
    end

# Step 3 - (-Question.all-) is the call to the MODEL saying, hey I need All the questions
    # .order(created_at: :desc) is the extra flavor for what's being requesting

# Step 6 - The CONTROLLER  is sending the @questions instance variable to our VIEW, specifically /Users/robp/challenges/rescue-mission/app/views/questions/index.html.erb

# Step 8 - The CONTROLLER send the HTML Response back to the USER/client

        # Creating a Question Form within our index page
    def new
        @question = Question.new
    end

    def create
        @question = Question.new(question_params)

        if @question.save
            flash[:notice] = "YAY PUBERTY"
            redirect_to @question
        else 
            flash[:notice] = @question.errors.full_messages.to_sentence
            render :new
        end
    end

    # Strong Params ... for extra security, it says that we are only permitting the our question a title and description, So nobody adds extra malicious stuff
    private
    
    def question_params
        params.require(:question).permit(:title, :description)
    end

end