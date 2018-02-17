"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: "avatar.jpg",
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  });

  User.beforeCreate((user, options) => {
    return bcrypt
      .hash(user.password, 10)
      .then(hash => {
        user.password = hash;
      })
      .catch(err => {
        throw new Error();
      });
  });

  // validate password method

  User.associate = function(models) {
    User.belongsTo(models.Role, {
      as: "role",
    });
    User.hasMany(models.Post, {
      as: "Posts",
      foreignKey: "userId",
    });
  };

  return User;
};
