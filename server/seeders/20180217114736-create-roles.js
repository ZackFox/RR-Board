"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "USER_ROLE",
        },
        {
          name: "ADMIN_ROLE",
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
    return queryInterface.bulkDelete("Role", null, {});
    /*
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
