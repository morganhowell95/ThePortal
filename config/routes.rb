Rails.application.routes.draw do

	root 'landing#home'
	get 'blog' => 'blog#main', as: 'blog'


	#publicly accessible download links
	get 'downloadAlescroAuthFlow' => 'landing#downloadAuthFlow'
	get 'downloadClockWorkUserGuide' => 'landing#downloadClockWorkUserGuide'
	get 'downloadCWjar' => 'landing#downloadClockWorkJar'
	get 'downloadSiemens' => 'landing#downloadSiemensPaper'
	  
end
