Rails.application.routes.draw do

	root 'landing#home'
	get 'blog' => 'blog#main', as: 'blog'
	  
end
