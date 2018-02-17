"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("Users", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        username: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
        },
        avatar: {
          type: Sequelize.STRING,
          defaultValue: "avatar.jpg",
        },
        roleId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Roles",
            key: "id",
          },
          defaultValue: 1,
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
        queryInterface.addIndex("Users", {
          fields: ["username", "email"],
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
