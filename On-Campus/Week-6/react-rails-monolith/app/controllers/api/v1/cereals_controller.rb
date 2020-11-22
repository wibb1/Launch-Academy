class Api::V1::CerealsController < ApiController
   
  def index
      #binding.pry
      format.json do |format|
        format.json do
          render json: { cereals: cereals }
          #binding.pry
        end
      end
  end

  def show
    @cereals = Cereal.find(params[:id])
  end

  private
  
end