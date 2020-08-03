class StudentsController < ApplicationController

  def index
    @students = Student.all
    
    # render :index
  end
  
  def show 
    # Student.find_by(id: params[:id])
    @student = Student.find(params[:id])

    render :show
  end 

end 