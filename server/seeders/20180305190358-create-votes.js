"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "vote",
      [
        {
          user_id: 2,
          voter_id: 1,
          rate: 2,
        },
        {
          user_id: 2,
          voter_id: 3,
          rate: 3,
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
