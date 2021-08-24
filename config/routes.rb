Rails.application.routes.draw do
  
  resources :shopping_carts, only: [:index, :destroy]
  resources :cars, only: [:index, :create, :update, :destroy]
  resources :users
  resources :sessions, only: [:index]

  post "/login", to: "users#login"
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


