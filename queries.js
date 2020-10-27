const User = require("./models").user;
const ToDoItems = require("./models").todoItem;
const { Op } = require("sequelize");

async function queries() {
  try {
    //Find all Users
    const allUsers = await User.findAll();
    //Find all ToDoItems
    const todoItems = await ToDoItems.findAll();
    //Find user by Primary Key (PK)

    const userById = await User.findByPk(1);

    return console.log(
      allUsers.map((user) => user.get({ plain: true })),
      todoItems.map((item) => item.get({ plain: true })),
      userById.get({ plain: true })
    );
    //return [allUsers].map((user) => user.get({ plain: true }));
  } catch (error) {
    console.log(error);
  }
}
queries();
