Rails.application.routes.draw do
  root 'articles#index'

  resources :articles, only: [:index, :show, :new, :create] do
    get 'search', on: :collection
  end
end
