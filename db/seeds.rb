# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Role.create([{ name: 'USER' },{ name:'ADMIN' }]);

User.create([
  {
    username: 'Administrator',
    email: 'admin@mail.com',
    hash_password:'root',
    role: 2
},
  {
    username: 'Джон Коннор',
    email: 'john@mail.com',
    hash_password:'t800',
  }
]);

Post.create([
  {
    author:2,
    title: 'Продам Терминатора(срочно)',
    descr: 'Продам Терминатора в хорошем состоянии, почти новый',
  }
])