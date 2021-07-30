'use strict';
const {
  Model, ForeignKeyConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FridgeIngredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      FridgeIngredients.hasOne(models.Fridge, { foreignKey: 'fridgeId' }),
      FridgeIngredients.hasOne(models.Ingredient, { foreignKey: 'ingredientId' })
    }
  };
  FridgeIngredients.init({
    fridgeId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FridgeIngredients',
  });
  return FridgeIngredients;
};
