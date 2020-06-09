class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery unless: -> { request.format.json? }

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:registration, keys: [:email, :password, :password_confirmation])
  end
end
