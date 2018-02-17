"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("Posts", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          references: {
            model: "Users",
            key: "id",
          },
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        text: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        thumbnail: {
          defaultValue: "post.jpg",
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => {
        queryInterface.addIndex("Posts", { fields: ["userId"] });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Posts");
  },
};
