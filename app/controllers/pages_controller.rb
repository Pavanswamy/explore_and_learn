class PagesController < ApplicationController
  before_action :authenticate_user!, except: [:home]
end
