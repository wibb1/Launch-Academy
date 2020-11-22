Rails.application.routes.draw do
  resources :campers, only: [:show]
  resources :campsites, only: [:index, :show] do
    resources :campers, only: [:index]
  end
  resources :supplies, only: [:show]
end
