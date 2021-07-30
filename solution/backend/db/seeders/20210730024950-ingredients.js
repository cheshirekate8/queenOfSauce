'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Ingredients', [
      {
        name: "Egg",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/2/26/Egg.png",
        desc: "A regular white chicken egg."
      },
      {
        name: "Milk",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/9/92/Milk.png",
        desc: "A jug of cow's milk."
      },
      {
        name: "Leek",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png",
        desc: "A tasty relative of the onion."
      },
      {
        name: "Dandelion",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/b/b1/Dandelion.png",
        desc: "Not the prettiest flower, but the leaves make a good salad."
      },
      {
        name: "Vinegar",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/f/fe/Vinegar.png",
        desc: "An aged fermented liquid used in many cooking recipes."
      },
      {
        name: "Cauliflower",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png",
        desc: "Valuable, but slow-growing. Despite its pale color, the florets are packed with nutrients."
      },
      {
        name: "Cheese",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/a/a5/Cheese.png",
        desc: "It's your basic cheese."
      },
      {
        name: "Sunfish",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/5/56/Sunfish.png",
        desc: "A common river fish."
      },
      {
        name: "Bream",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png",
        desc: "A fairly common river fish that becomes active at night."
      },
      {
        name: "Wheat Flour",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/2/2c/Wheat_Flour.png",
        desc: "A common cooking ingredient made from crushed wheat seeds."
      },
      {
        name: "Parsnip",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png",
        desc: "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients."
      },
      {
        name: "Tomato",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png",
        desc: "Rich and slightly tangy, the Tomato has a wide variety of culinary uses."
      },
      {
        name: "Beet",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png",
        desc: "A sweet and earthy root vegetable. As a bonus, the leaves make a great salad."
      },
      {
        name: "Squid",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/8/81/Squid.png",
        desc: "A deep sea creature that can grow to enormous size."
      },
      {
        name: "Oil",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/0/06/Oil.png",
        desc: "All purpose cooking oil."
      },
      {
        name: "Periwinkle",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Periwinkle.png",
        desc: "A tiny freshwater snail that lives in a blue shell."
      },
      {
        name: "Void Mayonnaise",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/f/f3/Void_Mayonnaise.png",
        desc: "A thick, black paste that smells like burnt hair."
      },
      {
        name: "Sea Cucumber",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/a/a9/Sea_Cucumber.png",
        desc: "A slippery, slimy creature found on the ocean floor."
      },
      {
        name: "Tortilla",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/d/d7/Tortilla.png",
        desc: "Can be used as a vessel for food or eaten by itself."
      },
      {
        name: "Blue Jazz",
        imgUrl: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png",
        desc: "The flower grows in a sphere to invite as many butterflies as possible."
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Ingredients', null, {});
  }
};
