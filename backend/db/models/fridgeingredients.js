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
      // FridgeIngredients.belongsToMany(models.Fridge, { foreignKey: 'fridgeId', otherKey: 'ingredientId', })
      // FridgeIngredients.belongsToMany(models.Ingredient, { foreignKey: 'ingredientId', otherKey: 'fridgeId',})
    }
  };
  FridgeIngredients.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true},
    fridgeId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FridgeIngredients',
  });
  return FridgeIngredients;
};
