#  The USER's Request to the ROUTER will ultimately be answered with an HTML Response from the CONTROLLER - This is our goal.

# Step 1 - The USER makes a REQUEST for index page
Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :questions, only: [:index, :show, :create, :new] do
    resources :answers, only: [:create]
  end

  # resources :questions, only: [:index, :show]
end

# Step 2 Request for :index is sent to CONTROLLER

# List of files to create in order
  #  Refer to Intro to Rails Notes
