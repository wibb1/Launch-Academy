Rails.application.routes.draw do
  root 'questions#index'
  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :questions, only: [:index, :new, :show, :create, :edit, :update, :destroy] do
    resources :answers, only: [:create, :edit, :update, :destroy]
  end
  
end
