Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :movies
  resources :users, except: [:edit, :update ]
  resources :reviews, only: [:new, :create]

  delete '/sessions/reset_page_count', to: 'sessions#reset_page_view_cookie', as: 'page_reset'
  delete '/sessions/logout', to: 'sessions#logout', as: 'logout'
  get '/sessions/new', to: 'sessions#new', as: 'new_login'
  post '/sessions/create', to: 'sessions#create', as: 'login'

  # get '/movies', to: 'movies#index', as: 'movies'
  # get '/movies/new', to: 'movies#new', as: 'new_movie'
  # get '/movies/:id', to: 'movies#show', as: 'movie'
  # get '/movies/:id/edit', to: 'movies#edit', as: 'edit_movie'

  # post '/movies', to: 'movies#create'
  # patch '/movies/:id', to: 'movies#update'
end
