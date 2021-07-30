'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('RecipeIngredients', [
      {
        ingredientId: 1,
        recipeId: 1
      },
      {
        recipeId: 2,
        ingredientId: 1
      },
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('RecipeIngredients', null, {});
  }
};
