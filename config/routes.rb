Rails.application.routes.draw do
  resources :line_items, only: :create
  resources :carts, only: :show
  root to: 'store#index'
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
