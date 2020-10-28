const { user, todoItem, todoList } = require("./models");
const todoitem = require("./models/todoitem");

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [user],
  });

  return lists.map((list) => list.get({ plain: true }));
}

// listsWithUsers().then((lists) => console.log(lists));

async function getUsers() {
  const allUsers = await user.findByPk(1, {
    include: { model: todoList, attributes: ["name"] },
  });
  return allUsers.get({ plain: true });
}

//getUsers().then((users) => console.log(users));

async function getImportant() {
  const importantName = await todoItem.findAll(
    { where: { important: true } },
    {
      include: { model: todoList, attributes: ["name"] },
    }
  );
  return importantName.map((user) => user.get({ plain: true }));
}

//getImportant().then((users) => console.log(users));

async function getUserTodoItem() {
  const userTodoitem = await user.findByPk(1, {
    include: [
      {
        model: todoList,
        attributes: ["name"],
        include: {
          model: todoItem,
          attributes: ["task"],
        },
      },
    ],
  });
  return userTodoitem.get({ plain: true });
}

getUserTodoItem().then((users) => console.log(users));
