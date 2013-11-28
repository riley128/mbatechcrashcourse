require 'spec_helper'

describe ContentController do

  describe "GET 'VIP'" do
    it "returns http success" do
      get 'VIP'
      response.should be_success
    end
  end

end
