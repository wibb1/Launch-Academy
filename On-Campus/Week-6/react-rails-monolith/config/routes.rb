Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/cereals', to: "static_pages#index"
  get '/cereals/new', to: "static_pages#index"
  get '/cereals/:id', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :cereals, only: [:index, :create, :new, :show]
    end
  end
end
