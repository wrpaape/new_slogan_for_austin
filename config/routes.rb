Rails.application.routes.draw do


  get 'slogans/leaderboards', to: 'slogans#leaderboards'
  get 'slogans/recent', to: 'slogans#most_recent'
  get 'slogans/liked', to: 'slogans#most_liked'
  get 'slogans/hated', to: 'slogans#most_hated'
  get 'comments/liked', to: 'comments#most_liked'
  get 'comments/hated', to: 'comments#most_hated'
  get 'slogans/:id/recent', to: 'slogans#show_w_comments'
  get 'slogans/:id/liked', to: 'slogans#show_w_comments_most_liked'
  get 'slogans/:id/hated', to: 'slogans#show_w_comments_most_hated'
  get 'users/:id/profile', to: 'users#show_profile'

  resources :users, :slogans, :comments

  post 'rates', to: 'rates#create'
  get 'about', to: 'about#show'
  get  'login', to: 'sessions#new',    as: 'login'
  post 'login', to: 'sessions#create', as: 'create_session'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  root 'application#index'
end
