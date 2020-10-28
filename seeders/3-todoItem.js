"use strict";

const user = require("../models/user");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Create a Database",
          deadline: "tomorow",
          important: true,
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Commit",
          deadline: "everytask",
          todoListId: 2,
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Play football",
          deadline: "once a week",
          todoListId: 2,
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
