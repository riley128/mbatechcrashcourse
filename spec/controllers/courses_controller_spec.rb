require 'spec_helper'

describe CoursesController do

  describe "GET 'monthly'" do
    it "returns http success" do
      get 'monthly'
      response.should be_success
    end
  end

end
