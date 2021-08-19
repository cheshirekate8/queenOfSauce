'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('FridgeIngredients', [
      {
        fridgeId: 1,
        ingredientId: 1,
        quantity: 2
      },
      {
        fridgeId: 1,
        ingredientId: 2,
        quantity: 1
      },
      {
        fridgeId: 1,
        ingredientId: 10,
        quantity: 1
      },
      {
        fridgeId: 2,
        ingredientId: 11,
        quantity: 1
      },
      {
        fridgeId: 3,
        ingredientId: 12,
        quantity: 1
      },
      {
        fridgeId: 3,
        ingredientId: 13,
        quantity: 1
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FridgeIngredients', null, {});
  }
};
