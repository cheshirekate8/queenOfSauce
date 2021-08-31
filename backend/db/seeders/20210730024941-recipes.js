'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Recipes', [
       {
       name: "Fried Egg",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/1/18/Fried_Egg.png",
       desc: "Sunny-side up."
     },
       {
       name: "Omelet",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/1/12/Omelet.png",
       desc: "It's super fluffy."
     },
       {
       name: "Salad",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Salad.png",
       desc: "A healthy garden salad."
     },
       {
       name: "Cheese Cauliflower",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cheese_Cauliflower.png",
       desc: "It smells great!"
     },
       {
       name: "Baked Fish",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/9/94/Baked_Fish.png",
       desc: "Baked fish on a bed of herbs."
     },
       {
       name: "Parsnip Soup",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/7/76/Parsnip_Soup.png",
       desc: "It's fresh and hearty."
     },
       {
       name: "Vegetable Medley",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/0/0a/Vegetable_Medley.png",
       desc: "This is very nutritious."
     },
       {
       name: "Complete Breakfast",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/3/3d/Complete_Breakfast.png",
       desc: "You'll feel ready to take on the world!"
     },
       {
       name: "Fried Calamari",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/2/25/Fried_Calamari.png",
       desc: "It's so chewy."
     },
       {
       name: "Strange Bun",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/5/5e/Strange_Bun.png",
       desc: "What's inside?"
     },
       {
       name: "Lucky Lunch",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Lucky_Lunch.png",
       desc: "A special little meal."
     },
       {
       name: "Fried Mushroom",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/4/4a/Fried_Mushroom.png",
       desc: "Earthy and aromatic."
     },
       {
       name: "Pizza",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/f/f4/Pizza.png",
       desc: "It's popular for all the right reasons."
     },
       {
       name: "Bean Hotpot",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/2/24/Bean_Hotpot.png",
       desc: "It sure is healthy."
     },
       {
       name: "Glazed Yams",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/3/30/Glazed_Yams.png",
       desc: "Sweet and satisfying... The sugar gives it a hint of caramel."
     },
       {
       name: "Carp Surprise",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/c/cc/Carp_Surprise.png",
       desc: "It's bland and oily."
     },
       {
       name: "Hashbrowns",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/8/8f/Hashbrowns.png",
       desc: "Crispy and golden-brown!"
     },
       {
       name: "Pancakes",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/6/6b/Pancakes.png",
       desc: "A double stack of fluffy, soft pancakes."
     },
       {
       name: "Salmon Dinner",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Salmon_Dinner.png",
       desc: "The lemon spritz makes it special."
     },
       {
       name: "Fish Taco",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Fish_Taco.png",
       desc: "It smells delicious."
     },
       {
       name: "Crispy Bass",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/5/53/Crispy_Bass.png",
       desc: "Wow, the breading is perfect."
     },
       {
       name: "Pepper Poppers",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/0/08/Pepper_Poppers.png",
       desc: "Spicy breaded peppers filled with cheese."
     },
       {
       name: "Bread",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Bread.png",
       desc: "A crusty baguette."
     },
       {
       name: "Tom Kha Soup",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Tom_Kha_Soup.png",
       desc: "These flavors are incredible!"
     },
       {
       name: "Trout Soup",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/4/48/Trout_Soup.png",
       desc: "Pretty salty."
     },
       {
       name: "Chocolate Cake",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/8/87/Chocolate_Cake.png",
       desc: "Rich and moist with a thick fudge icing."
     },
       {
       name: "Pink Cake",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/3/32/Pink_Cake.png",
       desc: "There's little heart candies on top."
     },
       {
       name: "Rhubarb Pie",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/2/21/Rhubarb_Pie.png",
       desc: "Mmm, tangy and sweet!"
     },
       {
       name: "Cookie",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/7/70/Cookie.png",
       desc: "Very chewy."
     },
       {
       name: "Spaghetti",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/0/08/Spaghetti.png",
       desc: "An old favorite."
     },
       {
       name: "Fried Eel",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/8/84/Fried_Eel.png",
       desc: "Greasy but flavorful."
     },
       {
       name: "Spicy Eel",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Spicy_Eel.png",
       desc: "It's really spicy! Be careful."
     },
       {
       name: "Sashimi",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/4/41/Sashimi.png",
       desc: "Raw fish sliced into thin pieces."
     },
       {
       name: "Maki Roll",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/b/b6/Maki_Roll.png",
       desc: "Fish and rice wrapped in seaweed."
     },
       {
       name: "Tortilla",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/d/d7/Tortilla.png",
       desc: "Can be used as a vessel for food or eaten by itself."
     },
       {
       name: "Red Plate",
       imgUrl: "https://stardewvalleywiki.com/mediawiki/images/4/45/Red_Plate.png",
       desc: "Full of antioxidants."
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
       {
       name: "AAAAA",
       imgUrl: "https",
       desc: "AAAAA"
     },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete("Recipes", null, {});
  }
};
