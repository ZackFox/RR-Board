"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("post", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          references: {
            model: "user", // имя таблицы
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
          defaultValue: "/public/static/img/uploads/thumbnail.jpg",
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      })
      .then(() => {
        queryInterface.addIndex("post", { fields: ["userId"] });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("post");
  },
};
