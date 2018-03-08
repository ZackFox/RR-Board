"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("vote", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "user", // имя таблицы
          key: "id",
        },
      },
      voter_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "user", // имя таблицы
          key: "id",
        },
      },
      rate: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("vote");
  },
};
