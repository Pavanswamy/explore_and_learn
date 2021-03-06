Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root "pages#home", page: "home"

  # API
  # namespace :api do
  #   namespace :v1 do
  #     resources :auth, only: %i[create] do
  #       collection do
  #         get "me", to: "auth#me"
  #         delete "logout", to: "auth#logout"
  #       end
  #     end

  #     resources :registrations, only: %i[create]
  #   end
  # end

  get '*path', to: 'pages#home', via: :all
end
