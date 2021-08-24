Rails.application.routes.draw do
  
  resources :shopping_carts, only: [:index, :destroy]
  resources :cars, only: [:index, :create, :update, :destroy]
  resources :users
  resources :sessions, only: [:index]

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "users#login"
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


