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
      Ingredient.hasMany(models.FridgeIngredients, {foreignKey: 'ingredientId'})
      Ingredient.hasMany(models.RecipeIngredients, {foreignKey: 'ingredientId'})
    }
  };
  Ingredient.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alsoRecipe: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};
