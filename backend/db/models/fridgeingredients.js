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
      FridgeIngredients.belongsTo(models.Fridge, { foreignKey: 'fridgeId' })
      FridgeIngredients.belongsTo(models.Ingredient, { foreignKey: 'ingredientId' })
    }
  };
  FridgeIngredients.init({
    fridgeId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: {
          args: [[999]],
          msg: "Your fridge must have less than 999 of a single ingredient."
        },
      },
    }
  }, {
    sequelize,
    modelName: 'FridgeIngredients',
  });
  return FridgeIngredients;
};


// name: {
//   type: DataTypes.STRING(50),
//   allowNull: false,
//   validate: {
//     len: [3, 50]
//   }
// },
