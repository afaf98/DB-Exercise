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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Commit",
          deadline: "everytask",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Play football",
          deadline: "once a week",
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
