"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
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
      },
      roleId: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    { freezeTableName: true },
  );

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

  User.prototype.checkPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
  };

  User.associate = function(models) {
    User.belongsTo(models.role, {
      foreignKey: "roleId",
    });
    User.hasMany(models.post, {
      foreignKey: "userId",
    });
    User.hasMany(models.vote, {
      foreignKey: "user_id",
    });
  };

  return User;
};
