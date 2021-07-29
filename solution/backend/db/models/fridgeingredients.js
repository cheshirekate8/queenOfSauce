'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FridgeIngredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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