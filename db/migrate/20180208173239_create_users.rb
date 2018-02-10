class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, unique: true, null: false
      t.string :hash_password
      t.string :avatar, default: 'avatar.jpg'
      t.integer :role, default: 1

      t.timestamps
    end
  end
end
