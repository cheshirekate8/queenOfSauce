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
      FridgeIngredients.belongsTo(models.Fridge, { foreignKey: 'fridgeId', onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks: true })
      FridgeIngredients.belongsTo(models.Ingredient, { foreignKey: 'ingredientId', onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks: true  })
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
