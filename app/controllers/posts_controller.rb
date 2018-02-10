class PostsController < ActionController::Base
  def index
    # render plain: "hello world"
    @posts = Post.all
    render json: @posts
  end
end
