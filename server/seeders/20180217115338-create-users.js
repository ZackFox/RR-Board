"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Admin",
          email: "seperman@gmail.com",
          password: bcrypt.hashSync("root", 10),
          roleId: 2,
        },
        {
          username: "John Connor",
          email: "johny@gmail.com",
          password: bcrypt.hashSync("12345", 10),
          roleId: 1,
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
