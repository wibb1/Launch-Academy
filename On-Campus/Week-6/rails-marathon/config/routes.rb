Rails.application.routes.draw do
  root 'houses#index'
  
  resources :houses, only: [:index, :show, :new, :create] do
    resources :members, only: [:new, :create]
  end
end