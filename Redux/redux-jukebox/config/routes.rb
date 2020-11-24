Rails.application.routes.draw do
  root 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :artists, only: :index do
        resources :songs, only: :index
      end

      resources :songs, only: [] do
        resources :playlist_songs, only: :create
      end

      resources :playlist_songs, only: [:index, :destroy]
    end
  end
end
