class HorsesController < ApplicationController
  before_action :set_horse, only: [:show, :edit, :update, :destroy]

  # GET /horses
  def index
    @horses = Horse.all
  end

  # GET /horses/1
  def show
  end

  # GET /horses/new
  def new
    @horse = Horse.new
  end

  # GET /horses/1/edit
  def edit
  end

  # POST /horses
  def create
    @horse = Horse.new(horse_params)

    if @horse.save
      redirect_to @horse, notice: 'Horse was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /horses/1
  def update
    if @horse.update(horse_params)
      redirect_to @horse, notice: 'Horse was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /horses/1
  def destroy
    @horse.destroy
    redirect_to horses_url, notice: 'Horse was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_horse
      @horse = Horse.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def horse_params
      params.require(:horse).permit(:name)
    end
end
