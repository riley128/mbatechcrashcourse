class ContentController < ApplicationController
  before_filter :authenticate_user!

  def VIP
  	authorize! :view, :VIP, :message => 'Access limited to VIP subscribers.'
  end
end
