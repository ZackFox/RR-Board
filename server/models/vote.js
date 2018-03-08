"use strict";
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define(
    "vote",
    {
      user_id: {
        type: DataTypes.INTEGER,
      },
      voter_id: {
        type: DataTypes.INTEGER,
      },
      rate: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false, freezeTableName: true },
  );

  Vote.associate = function(models) {
    Vote.hasMany(models.user, {
      foreignKey: "user_id",
    });
    Vote.hasMany(models.user, {
      foreignKey: "voter_id",
    });
  };
  return Vote;
};
