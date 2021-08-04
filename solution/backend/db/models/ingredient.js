'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ingredient.belongsToMany(models.Fridge, { through: models.FridgeIngredients, otherKey: 'fridgeId', foreignKey: 'ingredientId'})
      Ingredient.belongsToMany(models.Recipe, { through: models.RecipeIngredients, otherKey: 'recipeId', foreignKey: 'ingredientId'})
      Ingredient.belongsTo(models.User, { foreignKey: 'userId'})
    }
  };
  Ingredient.init({
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        len: [3, 30]
      }
    },
    imgUrl: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        len: [1, 500]
      }
    },
    desc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: [3, 100]
      }
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};
