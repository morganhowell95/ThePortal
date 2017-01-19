class LandingController < ApplicationController

  def home
  end

  #Download actions
  def downloadAuthFlow
    send_file 'public/assets/documents/AuthFlowAlescro.pdf', :type=>"application/pdf", :x_sendfile=>true
  end

  def downloadClockWorkUserGuide
    send_file 'public/assets/documents/ClockWorkUserGuide.pdf', :type=>"application/pdf", :x_sendfile=>true
  end

  def downloadClockWorkJar
  	send_file 'public/assets/documents/Clockwork.jar', type: "application/jar", x_sendfile: true
  end

  def downloadSiemensPaper
  	send_file 'public/assets/documents/Howell_Sidhu_Final.pdf', type: "application/pdf", x_sendfile: true
  end

end
