Rails.application.routes.draw do
  resources :posts do
    get 'download', to: 'posts#download', on: :member
    get 'edit_docx', to: 'posts#edit_docx', on: :member
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
