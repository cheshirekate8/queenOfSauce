'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Recipes', [
       {
       name: "Fried Egg",
       imgurl: "https://stardewvalleywiki.com/mediawiki/images/1/18/Fried_Egg.png",
       desc: "Sunny-side up.",
       userId: 1
     },
       {
       name: "Omelet",
       imgurl: "https://stardewvalleywiki.com/mediawiki/images/1/12/Omelet.png",
       desc: "It's super fluffy.",
       userId: 1
     },
       {
       name: "Salad",
       imgurl: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Salad.png",
       desc: "A healthy garden salad.",
       userId: 2
     },
       {
       name: "Cheese Cauliflower",
       imgurl: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cheese_Cauliflower.png",
       desc: "It smells great!",
       userId: 2
     },
       {
       name: "Baked Fish",
       imgurl: "https://stardewvalleywiki.com/mediawiki/images/9/94/Baked_Fish.png",
       desc: "Baked fish on a bed of herbs.",
       userId: 3
     },
       {
       name: "Parsnip Soup",
       imgurl: "https://stardewvalleywiki.com/mediawiki/images/7/76/Parsnip_Soup.png",
       desc: "It's fresh and hearty.",
       userId: 3
     },
       {
       name: "Vegetable Medley",
       imgurl: "https://stardewvalleywiki.com/mediawiki/images/0/0a/Vegetable_Medley.png",
       desc: "This is very nutritious.",
       userId: null
     },
       {
       name: "Fried Calamari",
       imgurl: "https://stardewvalleywiki.com/mediawiki/images/2/25/Fried_Calamari.png",
       desc: "It's so chewy.",
       userId: null
     },
       {
       name: "Strange Bun",
       imgurl: "https://stardewvalleywiki.com/mediawiki/images/5/5e/Strange_Bun.png",
       desc: "What's inside?",
       userId: null
     },
       {
       name: "Lucky Lunch",
       imgurl: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Lucky_Lunch.png",
       desc: "A special little meal.",
       userId: null
     }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete("Recipes", null, {});
  }
};
