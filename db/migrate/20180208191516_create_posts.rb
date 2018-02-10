class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.integer :author
      t.string :title, null: false
      t.text :descr, null: false
      t.string :thumbnail, default: 'thumbnail.jpg'

      t.timestamps
    end
  end
end
