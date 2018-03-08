"use strict";
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define(
    "role",
    {
      name: DataTypes.STRING,
    },
    { timestamps: false, freezeTableName: true },
  );
  return Role;
};
