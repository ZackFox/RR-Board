"use strict";

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    thumbnail: DataTypes.STRING,
  });

  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      as: "user",
      foreingKey: "userId",
    });
  };

  return Post;
};
