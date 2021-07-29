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
      Ingredient.belongsToMany(models.Fridge, { through: models.FridgeIngredients, foreignKey: 'ingredientId', otherKey: 'fridgeId'})
      Ingredient.belongsToMany(models.Recipe, { through: models.RecipeIngredients, foreignKey: 'ingredientId', otherKey: 'recipeId'})
    }
  };
  Ingredient.init({
    name: DataTypes.STRING,
    imgurl: DataTypes.STRING,
    desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};
