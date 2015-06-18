Rails.application.routes.draw do
  resources :users, :slogans, :comments
  root 'application#index'
end
