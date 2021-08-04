'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.belongsTo(models.User, { foreignKey: 'userId'})
      Recipe.belongsToMany(models.Ingredient, { through: models.RecipeIngredients, otherKey: 'ingredientId', foreignKey: 'recipeId'})
    }
  };
  Recipe.init({
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    desc: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
