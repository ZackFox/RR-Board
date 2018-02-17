"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "John Connor",
          email: "johny@gmail.com",
          password: "12345",
          roleId: 1,
        },
        {
          username: "Admin",
          email: "seperman@gmail.com",
          password: "root",
          roleId: 2,
        },
      ],
      {},
    );
    /*
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
