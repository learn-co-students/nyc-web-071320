class RemoveTeacherIdFromStudents < ActiveRecord::Migration[6.0]
  def change
    remove_column :students, :teacher_id
  end
end
