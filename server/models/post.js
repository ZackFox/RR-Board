"use strict";

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define(
    "post",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      text: DataTypes.TEXT,
      thumbnail: DataTypes.STRING,
    },
    { freezeTableName: true },
  );

  Post.associate = function(models) {
    Post.belongsTo(models.user, {
      as: "user",
      foreingKey: "userId",
    });
  };

  return Post;
};
