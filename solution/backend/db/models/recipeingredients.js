'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeIngredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // RecipeIngredients.belongsToMany(models.Recipe, { foreignKey: 'recipeId' })
      // RecipeIngredients.belongsToMany(models.Ingredient, { foreignKey: 'ingredientId'  })
    }
  };
  RecipeIngredients.init({
    ingredientId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RecipeIngredients',
  });
  return RecipeIngredients;
};
