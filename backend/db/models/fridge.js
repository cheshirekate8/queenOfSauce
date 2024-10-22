"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fridge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fridge.belongsTo(models.User, { foreignKey: "userId" });
      Fridge.hasMany(models.FridgeIngredients, { foreignKey: "fridgeId" });
    }
  }
  Fridge.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [3, 50],
        },
      },
    },
    {
      sequelize,
      modelName: "Fridge",
    },
  );
  return Fridge;
};
