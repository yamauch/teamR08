class TreeImage < ActiveRecord::Migration[5.1]
  def change
    add_column :table, :column, :string
  end
end
