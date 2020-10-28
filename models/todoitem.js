"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      todoItem.belongsTo(models.todoList);
      todoItem.belongToMany(models.tag, {
        through: "id",
        foreignKey: "todoItemId",
      });
    }
  }
  todoItem.init(
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
      todoListId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "todoItem",
    }
  );
  return todoItem;
};
