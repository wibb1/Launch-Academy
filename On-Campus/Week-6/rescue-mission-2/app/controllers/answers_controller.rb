class AnswersController <ApplicationController
    def create
    
        @question = Question.find(params[:question_id]) 
        
        @answer = Answer.new(answer_params)

        @answer.question = @question

        if @answer.save
            flash[:notice] = "You wrote an answer, good job... stupid"
            redirect_to question_path(@question)
        else 
            flash[:notice] = @question.errors.full_messages.to_sentence
            redirect_to question_path(@question)
        end
    end

    private
    
    def answer_params
        params.require(:answer).permit(:description)
    end
end