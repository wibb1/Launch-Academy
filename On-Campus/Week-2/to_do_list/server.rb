require "sinatra"

get "/tasks" do
  @tasks = ["pay bills", "buy milk", "learn Ruby"]
  erb :index
end

get "/tasks/:task_name" do
  @task_name = params[:task_name]
  erb :show
end