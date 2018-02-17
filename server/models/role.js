"use strict";
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define("Role", {
    name: DataTypes.STRING,
  });
  return Role;
};
