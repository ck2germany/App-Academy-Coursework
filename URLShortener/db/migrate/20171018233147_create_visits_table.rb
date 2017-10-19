class CreateVisitsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :visits do |t|
      t.integer :user_id
      t.integer :short_id
      t.timestamps
    end
    add_index :visits, :user_id
    add_index :visits, :short_id
  end

end
