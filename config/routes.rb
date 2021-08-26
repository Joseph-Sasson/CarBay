Rails.application.routes.draw do
  
  resources :shopping_carts, only: [:index, :create, :destroy]
  resources :cars, only: [:index, :create, :update, :destroy]
  resources :users

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "/buy/:id", to: "cars#buy"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


