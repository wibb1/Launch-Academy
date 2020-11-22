class ArticlesController < ApplicationController

  # GET /articles
  def index
    @articles = Article.all
  end

  # GET /articles/1
  def show
    @article = Article.find(params[:id])
  end

  # GET /articles/new
  def new
    @article = Article.new
  end

  # POST /articles
  def create
    @article = Article.new(article_params)

    if @article.save
      flash[:notice] = 'Article was successfully created.'
      redirect_to @article
    else
      render action: 'new'
    end
  end

  # GET /articles/search
  def search
    query = "%#{params[:query]}%"
    @articles = Article
      .where('title ilike ? or description ilike ? or url ilike ?',
             query, query, query)
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def article_params
    params.require(:article).permit(:title, :description, :url, :submitter)
  end
end
