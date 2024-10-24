"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.hasMany(models.RecipeIngredients, { foreignKey: "recipeId" });
    }
  }
  Recipe.init(
    {
      name: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      desc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Recipe",
    },
  );
  return Recipe;
};
