"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: 2,
          title: "Продам Терминатора(срочно)",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quiaplaceat, dignissimos dicta perspiciatis enim quam distinctiopraesentium expedita facere error ullam aspernatur quaerat,molestiae, maiores rem reprehenderit harum neque",
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
