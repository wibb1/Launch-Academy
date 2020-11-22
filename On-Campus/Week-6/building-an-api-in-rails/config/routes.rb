Rails.application.routes.draw do
  resources :campsites, only: [:index] do
    resources :campers, only: [:index]
  end

  resources :campers, only: [:index] do
    resources :supplies, only: [:index]
  end

  resources :supplies, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :campers, only: [:index]
    end
  end
  
end
