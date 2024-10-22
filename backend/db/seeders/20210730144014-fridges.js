module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Fridges",
      [
        {
          userId: 1,
          name: "My Fridge",
        },
        {
          userId: 2,
          name: "My Fridge",
        },
        {
          userId: 1,
          name: "My Other Fridge",
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Fridges", null, {});
  },
};
