'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('FridgeIngredients', [
      {
        fridgeId: 1,
        ingredientId: 1
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FridgeIngredients', null, {});
  }
};
