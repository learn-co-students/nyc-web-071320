Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :movies
  resources :users, only: [:show]
  resources :reviews, only: [:new, :create]

  # get '/movies', to: 'movies#index', as: 'movies'
  # get '/movies/new', to: 'movies#new', as: 'new_movie'
  # get '/movies/:id', to: 'movies#show', as: 'movie'
  # get '/movies/:id/edit', to: 'movies#edit', as: 'edit_movie'

  # post '/movies', to: 'movies#create'
  # patch '/movies/:id', to: 'movies#update'
end
