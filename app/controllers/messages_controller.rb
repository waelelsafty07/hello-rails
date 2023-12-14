class MessagesController < ApplicationController
  # GET /messages or /messages.json
  def index
    render json: { message: Message.order('RANDOM()').first.content }
  end
end
