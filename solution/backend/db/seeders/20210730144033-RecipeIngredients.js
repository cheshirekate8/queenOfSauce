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
      {
        recipeId: 2,
        ingredientId: 2
      },
      {
        recipeId:3,
        ingredientId: 3
      },
      {
        recipeId: 3,
        ingredientId: 4
      },
      {
        recipeId: 3,
        ingredientId: 5
      },
      {
        recipeId: 4,
        ingredientId: 6
      },
      {
        recipeId: 4,
        ingredientId: 7
      },
      {
        recipeId: 5,
        ingredientId: 8
      },
      {
        recipeId: 5,
        ingredientId: 9
      },
      {
        recipeId: 5,
        ingredientId: 10
      },
      {
        recipeId: 6,
        ingredientId: 11
      },
      {
        recipeId: 6,
        ingredientId: 2
      },
      {
        recipeId: 6,
        ingredientId: 5
      },
      {
        recipeId: 7,
        ingredientId: 12
      },
      {
        recipeId: 7,
        ingredientId: 13
      },
      {
        recipeId: 8,
        ingredientId: 14
      },
      {
        recipeId: 8,
        ingredientId: 10
      },
      {
        recipeId: 8,
        ingredientId: 15
      },
      {
        recipeId: 9,
        ingredientId: 10
      },
      {
        recipeId: 9,
        ingredientId: 16
      },
      {
        recipeId: 9,
        ingredientId: 17
      },
      {
        recipeId: 10,
        ingredientId: 18
      },
      {
        recipeId: 10,
        ingredientId: 19
      },
      {
        recipeId: 10,
        ingredientId: 20
      },
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('RecipeIngredients', null, {});
  }
};
