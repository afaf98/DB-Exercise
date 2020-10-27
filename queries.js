const User = require("./models").user;
const ToDoItems = require("./models").todoItem;

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
// queries();

async function createNewUser(name, email, phone, password) {
  try {
    const newUser = await User.create(name, email, phone, password);
    return console.log(newUser.get({ plain: true }));
  } catch (error) {
    console.log(error);
  }
}

// createNewUser("Afaf", "afaf@email.com", "1234", "1234");

async function findImportantItems() {
  try {
    const findImportant = await ToDoItems.findAll({
      where: { important: true },
    });
    return console.log(findImportant.map((item) => item.get({ plain: true })));
  } catch (error) {
    console.log(error);
  }
}
findImportantItems();
