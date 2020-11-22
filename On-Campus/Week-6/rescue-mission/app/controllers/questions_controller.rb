class QuestionsController < ApplicationController
  def index
    @questions = Question.all.order(created_at: :desc)
  end

  def new
    @question = Question.new
  end  
  
  def show
    @question = Question.find(params["id"])
    @answers = @question.answers

    @answer = Answer.new
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      flash[:notice] = "Save Successfull"
      redirect_to @question
    else
      flash.now[:notice] = @question.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
    @question = Question.find(params[:id])
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      flash[:notice] = "Question Updated"
      redirect_to @question
    else
      flash.now[:error] = @question.errors.full_messages.to_sentence
      render 'edit'
    end
  end

  def destroy
    Question.find(params[:id]).destroy
    flash[:success] = "Question susccessfully deleted"
    redirect_to questions_path
  end

  private

  def question_params
    params.require(:question).permit(:title, :description)
  end

end