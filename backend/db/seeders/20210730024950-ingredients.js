"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Ingredients",
      [
        {
          name: "Parsnip",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png",
          desc: "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Kale",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/d/d1/Kale.png",
          desc: "The waxy leaves are great in soups and stir frys.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Potato",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png",
          desc: "A widely cultivated tuber.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Blue Jazz",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png",
          desc: "The flower grows in a sphere to invite as many butterflies as possible.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Green Bean",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png",
          desc: "A juicy little bean with a cool, crisp snap.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Cauliflower",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png",
          desc: "Valuable, but slow-growing. Despite its pale color, the florets are packed with nutrients.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Rhubarb",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/6/6e/Rhubarb.png",
          desc: "The stalks are extremely tart, but make a great dessert when sweetened.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Garlic",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/c/cc/Garlic.png",
          desc: "Adds a wonderful zestiness to dishes. High quality garlic can be pretty spicy.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Hot Pepper",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png",
          desc: "Fiery hot with a hint of sweetness.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Radish",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/d/d5/Radish.png",
          desc: "A crisp and refreshing root vegetable with hints of pepper when eaten raw.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Poppy",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png",
          desc: "In addition to its colorful flower, the Poppy has culinary and medicinal uses.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Tomato",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png",
          desc: "Rich and slightly tangy, the Tomato has a wide variety of culinary uses.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Melon",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png",
          desc: "A cool, sweet summer treat.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Blueberry",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png",
          desc: "A popular berry reported to have many health benefits. The blue skin has the highest nutrient concentration.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Corn",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png",
          desc: "One of the most popular grains. The sweet, fresh cobs are a summer favorite.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Red Cabbage",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png",
          desc: "Often used in salads and coleslaws. The color can range from purple to blue to green-yellow depending on soil conditions.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Bok Choy",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png",
          desc: "The leafy greens and fibrous stalks are healthy and delicious.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Eggplant",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png",
          desc: "A rich and wholesome relative of the tomato. Delicious fried or stewed.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Amaranth",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/f6/Amaranth.png",
          desc: "A purple grain cultivated by an ancient civilization.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Cranberries",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png",
          desc: "These tart red berries are a traditional winter food.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Yam",
          imgUrl: "https://stardewvalleywiki.com/mediawiki/images/5/52/Yam.png",
          desc: "A starchy tuber with a lot of culinary versatility.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Pumpkin",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png",
          desc: "A fall favorite, grown for its crunchy seeds and delicately flavored flesh. As a bonus, the hollow shell can be carved into a festive decoration.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Beet",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png",
          desc: "A sweet and earthy root vegatable. As a bonus, the leaves make a great salad.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Artichoke",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/d/dd/Artichoke.png",
          desc: "The bud of a thistle plant. The spiny outer leaves conceal a fleshy, filling interior.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Pineapple",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/fb/Pineapple.png",
          desc: "A sweet and tangy tropical treat.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Taro Root",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/0/01/Taro_Root.png",
          desc: "This starchy root is one of the most ancient crops.",
          type: "Crops",
          alsoRecipe: "false",
        },
        {
          name: "Blackberry",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/2/25/Blackberry.png",
          desc: "An early-fall treat.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Cave Carrot",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/34/Cave_Carrot.png",
          desc: "A starchy snack found in caves. It helps miners work longer.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Common Mushroom",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/2/2e/Common_Mushroom.png",
          desc: "Slightly nutty, with a good texture.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Dandelion",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/b/b1/Dandelion.png",
          desc: "Not the prettiest flower, but the leaves make a good salad.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Coconut",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/2/2f/Coconut.png",
          desc: "A seed of the coconut palm. It has many culinary uses.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Fiddlehead Fern",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/4/48/Fiddlehead_Fern.png",
          desc: "The young shoots are an edible specialty.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Hazelnut",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/31/Hazelnut.png",
          desc: "That's one big hazelnut!",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Wild Horseradish",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png",
          desc: "A spicy root found in the spring.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Leek",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png",
          desc: "A tasty relative of the onion.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Morel",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/b/b1/Morel.png",
          desc: "Sought after for its unique nutty flavor.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Wild Plum",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/3b/Wild_Plum.png",
          desc: "Tart and juicy with a pungent aroma.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Winter Root",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/11/Winter_Root.png",
          desc: "A starchy tuber.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Ginger",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/85/Ginger.png",
          desc: "This sharp, spicy root is said to increase vitality.",
          type: "Foraged Goods",
          alsoRecipe: "false",
        },
        {
          name: "Apple",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/7/7d/Apple.png",
          desc: "A crisp fruit used for juice and cider.",
          type: "Tree Fruit",
          alsoRecipe: "false",
        },
        {
          name: "Apricot",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/fc/Apricot.png",
          desc: "A tender little fruit with a rock-hard pit.",
          type: "Tree Fruit",
          alsoRecipe: "false",
        },
        {
          name: "Banana",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/6/69/Banana.png",
          desc: "A sweet, starchy tropical fruit.",
          type: "Tree Fruit",
          alsoRecipe: "false",
        },
        {
          name: "Mango",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/38/Mango.png",
          desc: "A big, sweet tropical fruit with a unique flavor.",
          type: "Tree Fruit",
          alsoRecipe: "false",
        },
        {
          name: "Egg",
          imgUrl: "https://stardewvalleywiki.com/mediawiki/images/2/26/Egg.png",
          desc: "A regular white chicken egg.",
          type: "Animal Products",
          alsoRecipe: "false",
        },
        {
          name: "Milk",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/92/Milk.png",
          desc: "A jug of cow's milk.",
          type: "Animal Products",
          alsoRecipe: "false",
        },
        {
          name: "Cheese",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/a/a5/Cheese.png",
          desc: "It's your basic cheese.",
          type: "Artisan Goods",
          alsoRecipe: "false",
        },
        {
          name: "Mayonnaise",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/4/4e/Mayonnaise.png",
          desc: "It looks spreadable.",
          type: "Artisan Goods",
          alsoRecipe: "false",
        },
        {
          name: "Void Mayonnaise",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/f3/Void_Mayonnaise.png",
          desc: "A thick, black paste that smells like burnt hair.",
          type: "Artisan Goods",
          alsoRecipe: "false",
        },
        {
          name: "Coffee",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/e/e9/Coffee.png",
          desc: "It smells delicious. This is sure to give you a boost.",
          type: "Artisan Goods",
          alsoRecipe: "false",
        },
        {
          name: "Maple Syrup",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/6/6a/Maple_Syrup.png",
          desc: "A sweet syrup with a unique flavor.",
          type: "Misc",
          alsoRecipe: "false",
        },
        {
          name: "Squid Ink",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/a/ac/Squid_Ink.png",
          desc: "Squid use this ink to confuse would-be predators.",
          type: "Misc",
          alsoRecipe: "false",
        },
        {
          name: "Tuna",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/c/c5/Tuna.png",
          desc: "A large fish that lives in the ocean.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Sardine",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/0/04/Sardine.png",
          desc: "A common ocean fish.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Bream",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png",
          desc: "A fairly common river fish that becomes active at night.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Largemouth Bass",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/11/Largemouth_Bass.png",
          desc: "A popular fish that lives in lakes.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Rainbow Trout",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/14/Rainbow_Trout.png",
          desc: "A freshwater trout with colorful markings.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Salmon",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/e/e0/Salmon.png",
          desc: "Swims upstream to lay its eggs.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Flounder",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/85/Flounder.png",
          desc: "It lives on the bottom, so both eyes are on top of its head.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Midnight Carp",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/33/Midnight_Carp.png",
          desc: "This shy fish only feels comfortable at night.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Carp",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/a/a8/Carp.png",
          desc: "A common pond fish.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Sunfish",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/5/56/Sunfish.png",
          desc: "A common river fish.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Eel",
          imgUrl: "https://stardewvalleywiki.com/mediawiki/images/9/91/Eel.png",
          desc: "A long, slippery little fish.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Squid",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/81/Squid.png",
          desc: "A deep sea creature that can grow to enormous size.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Sea Cucumber",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/a/a9/Sea_Cucumber.png",
          desc: "A slippery, slimy creature found on the ocean floor.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Seaweed",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/13/Seaweed.png",
          desc: "It can be used in cooking.",
          type: "Fishing",
          alsoRecipe: "false",
        },
        {
          name: "Green Algae",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/6/6d/Green_Algae.png",
          desc: "It's really slimy.",
          type: "Fishing",
          alsoRecipe: "false",
        },
        {
          name: "White Algae",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/f7/White_Algae.png",
          desc: "It's super slimy.",
          type: "Fishing",
          alsoRecipe: "false",
        },
        {
          name: "Lobster",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/9f/Lobster.png",
          desc: "A large ocean-dwelling crustacean with a strong tail.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Clam",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/e/ed/Clam.png",
          desc: "Someone lived here once.",
          type: "Fishing",
          alsoRecipe: "false",
        },
        {
          name: "Crayfish",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/5/53/Crayfish.png",
          desc: "A small freshwater relative of the lobster.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Crab",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/6/63/Crab.png",
          desc: "A marine crustacean with two powerful pincers.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Mussel",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/a/aa/Mussel.png",
          desc: "A common bivalve that often lives in clusters.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Shrimp",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/91/Shrimp.png",
          desc: "A scavenger that feeds off the ocean floor. Widely prized for its meat.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Snail",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/d/d2/Snail.png",
          desc: "A wide-ranging mollusc that lives in a spiral shell.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Periwinkle",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/1d/Periwinkle.png",
          desc: "A tiny freshwater snail that lives in a blue shell.",
          type: "Fish",
          alsoRecipe: "false",
        },
        {
          name: "Sugar",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/a/a9/Sugar.png",
          desc: "Adds sweetness to pastries and candies. Too much can be unhealthy.",
          type: "General Store Items",
          alsoRecipe: "false",
        },
        {
          name: "Wheat Flour",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/2/2c/Wheat_Flour.png",
          desc: "A common cooking ingredient made from crushed wheat seeds.",
          type: "General Store Items",
          alsoRecipe: "false",
        },
        {
          name: "Rice",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/d/da/Rice.png",
          desc: "A basic grain often served under vegetables.",
          type: "General Store Items",
          alsoRecipe: "false",
        },
        {
          name: "Oil",
          imgUrl: "https://stardewvalleywiki.com/mediawiki/images/0/06/Oil.png",
          desc: "All purpose cooking oil.",
          type: "General Store Items",
          alsoRecipe: "false",
        },
        {
          name: "Vinegar",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/fe/Vinegar.png",
          desc: "An aged fermented liquid used in many cooking recipes.",
          type: "General Store Items",
          alsoRecipe: "false",
        },
        {
          name: "Fried Egg",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/18/Fried_Egg.png",
          desc: "Sunny-side up.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Hashbrowns",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/8f/Hashbrowns.png",
          desc: "Crispy and golden-brown!",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Pancakes",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/6/6b/Pancakes.png",
          desc: "A double stack of fluffy, soft pancakes.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Tortilla",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/d/d7/Tortilla.png",
          desc: "Can be used as a vessel for food or eaten by itself.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Bread",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/e/e1/Bread.png",
          desc: "A crusty baguette.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Omelet",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/12/Omelet.png",
          desc: "It's super fluffy.",
          type: "Completed",
          alsoRecipe: "true",
        },
        //! ONLY FINAL INGREDIENTS BELOW
        {
          name: "Salad",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/7/7e/Salad.png",
          desc: "A healthy garden salad.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Cheese Cauliflower",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cheese_Cauliflower.png",
          desc: "It smells great!",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Baked Fish",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/94/Baked_Fish.png",
          desc: "Baked fish on a bed of herbs.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Parsnip Soup",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/7/76/Parsnip_Soup.png",
          desc: "It's fresh and hearty.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Vegetable Medley",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/0/0a/Vegetable_Medley.png",
          desc: "This is very nutritious.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Complete Breakfast",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/3d/Complete_Breakfast.png",
          desc: "You'll feel ready to take on the world!",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Fried Calamari",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/2/25/Fried_Calamari.png",
          desc: "It's so chewy.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Strange Bun",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/5/5e/Strange_Bun.png",
          desc: "What's inside?",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Lucky Lunch",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/5/5d/Lucky_Lunch.png",
          desc: "A special little meal.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Fried Mushroom",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/4/4a/Fried_Mushroom.png",
          desc: "Earthy and aromatic.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Pizza",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/f4/Pizza.png",
          desc: "It's popular for all the right reasons.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Bean Hotpot",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/2/24/Bean_Hotpot.png",
          desc: "It sure is healthy.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Glazed Yams",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/30/Glazed_Yams.png",
          desc: "Sweet and satisfying... The sugar gives it a hint of caramel.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Carp Surprise",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/c/cc/Carp_Surprise.png",
          desc: "It's bland and oily.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Salmon Dinner",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/8b/Salmon_Dinner.png",
          desc: "The lemon spritz makes it special.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Fish Taco",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/d/d5/Fish_Taco.png",
          desc: "It smells delicious.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Crispy Bass",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/5/53/Crispy_Bass.png",
          desc: "Wow, the breading is perfect.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Pepper Poppers",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/0/08/Pepper_Poppers.png",
          desc: "Spicy breaded peppers filled with cheese.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Tom Kha Soup",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/3b/Tom_Kha_Soup.png",
          desc: "These flavors are incredible!",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Trout Soup",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/4/48/Trout_Soup.png",
          desc: "Pretty salty.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Chocolate Cake",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/87/Chocolate_Cake.png",
          desc: "Rich and moist with a thick fudge icing.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Pink Cake",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/32/Pink_Cake.png",
          desc: "There's little heart candies on top.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Rhubarb Pie",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/2/21/Rhubarb_Pie.png",
          desc: "Mmm, tangy and sweet!",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Cookie",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/7/70/Cookie.png",
          desc: "Very chewy.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Spaghetti",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/0/08/Spaghetti.png",
          desc: "An old favorite.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Fried Eel",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/84/Fried_Eel.png",
          desc: "Greasy but flavorful.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Spicy Eel",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/f2/Spicy_Eel.png",
          desc: "It's really spicy! Be careful.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Sashimi",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/4/41/Sashimi.png",
          desc: "Raw fish sliced into thin pieces.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Maki Roll",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/b/b6/Maki_Roll.png",
          desc: "Fish and rice wrapped in seaweed.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Red Plate",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/4/45/Red_Plate.png",
          desc: "Full of antioxidants.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Eggplant Parmesan",
          imgUrl: "https://stardewvalleywiki.com/File:Eggplant_Parmesan.png",
          desc: "	Tangy, cheesy, and wonderful.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Rice Pudding",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/e/ec/Rice_Pudding.png",
          desc: "It's creamy, sweet, and fun to eat.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Ice Cream",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/5/5d/Ice_Cream.png",
          desc: "It's hard to find someone who doesn't like this.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Blueberry Tart",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/9b/Blueberry_Tart.png",
          desc: "It's subtle and refreshing.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Autumn's Bounty",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/f4/Autumn%27s_Bounty.png",
          desc: "A taste of the season.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Pumpkin Soup",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/5/59/Pumpkin_Soup.png",
          desc: "A seasonal favorite.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Super Meal",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/d/d2/Super_Meal.png",
          desc: "It's a really energizing meal.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Cranberry Sauce",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/0/0b/Cranberry_Sauce.png",
          desc: "A festive treat.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Stuffing",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/9a/Stuffing.png",
          desc: "Ahh... the smell of warm bread and sage.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Farmer's Lunch",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/7/79/Farmer%27s_Lunch.png",
          desc: "This'll keep you going.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Survival Burger",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/87/Survival_Burger.png",
          desc: "A convenient snack for the explorer.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Dish O' The Sea",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/f/ff/Dish_O%27_The_Sea.png",
          desc: "This'll keep you warm in the cold sea air.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Miner's Treat",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/12/Miner%27s_Treat.png",
          desc: "This should keep your energy up.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Roots Platter",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/e/e0/Roots_Platter.png",
          desc: "This'll get you digging for more.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Triple Shot Espresso",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/36/Triple_Shot_Espresso.png",
          desc: "It's more potent than regular coffee!",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Seafoam Pudding",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/33/Seafoam_Pudding.png",
          desc: "This briny pudding will really get you into the maritime mindset!",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Algae Soup",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/5/53/Algae_Soup.png",
          desc: "It's a little slimy.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Pale Broth",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pale_Broth.png",
          desc: "A delicate broth with a hint of sulfur.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Plum Pudding",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/a/a0/Plum_Pudding.png",
          desc: "A traditional holiday treat.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Artichoke Dip",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/7/77/Artichoke_Dip.png",
          desc: "It's cool and refreshing.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Stir Fry",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/e/ed/Stir_Fry.png",
          desc: "Julienned vegetables on a bed of rice.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Roasted Hazelnuts",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/18/Roasted_Hazelnuts.png",
          desc: "The roasting process creates a rich forest flavor.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Pumpkin Pie",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/7/7d/Pumpkin_Pie.png",
          desc: "Silky pumpkin cream in a flakey crust.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Radish Salad",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/b/b9/Radish_Salad.png",
          desc: "The radishes are so crisp!",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Fruit Salad",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/9e/Fruit_Salad.png",
          desc: "A delicious combination of summer fruits.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Blackberry Cobbler",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/7/70/Blackberry_Cobbler.png",
          desc: "There's nothing quite like it.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Cranberry Candy",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/9d/Cranberry_Candy.png",
          desc: "It's sweet enough to mask the bitter fruit.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Bruschetta",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/c/ca/Bruschetta.png",
          desc: "Roasted tomatoes on a crisp white bread.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Coleslaw",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/e/e1/Coleslaw.png",
          desc: "It's light, fresh and very healthy.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Fiddlehead Risotto",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/2/2d/Fiddlehead_Risotto.png",
          desc: "A creamy rice dish served with sauteed fern heads. It's a little bland.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Poppyseed Muffin",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/8e/Poppyseed_Muffin.png",
          desc: "It has a soothing effect.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Chowder",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/9/95/Chowder.png",
          desc: "A perfect way to warm yourself after a cold night at sea.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Fish Stew",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/6/6f/Fish_Stew.png",
          desc: "It smells a lot like the sea. Tastes better, though.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Escargot",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/7/78/Escargot.png",
          desc: "Butter-soaked snails cooked to perfection.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Lobster Bisque",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/0/0a/Lobster_Bisque.png",
          desc: "This delicate soup is a secret family recipe of Willy's.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Maple Bar",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/18/Maple_Bar.png",
          desc: "It's a sweet doughnut topped with a rich maple glaze.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Crab Cakes",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/7/70/Crab_Cakes.png",
          desc: "Crab, bread crumbs, and egg formed into patties then fried to a golden brown.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Shrimp Cocktail",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/8e/Shrimp_Cocktail.png",
          desc: "A sumptuous appetizer made with freshly-caught shrimp.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Ginger Ale",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/1/1a/Ginger_Ale.png",
          desc: "A zesty soda known for its soothing effect on the stomach.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Banana Pudding",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/4/40/Banana_Pudding.png",
          desc: "A creamy dessert with a wonderful tropical flavor.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Mango Sticky Rice",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/6/6e/Mango_Sticky_Rice.png",
          desc: "Sweet mango and coconut transforms this rice into something very special.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Poi",
          imgUrl: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Poi.png",
          desc: "A traditional food with a delicate, sweet flavor when eaten fresh.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Tropical Curry",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/3/32/Tropical_Curry.png",
          desc: "An exotic, fragrant curry served in a pineapple bowl.",
          type: "Completed",
          alsoRecipe: "true",
        },
        {
          name: "Squid Ink Ravioli",
          imgUrl:
            "https://stardewvalleywiki.com/mediawiki/images/8/86/Squid_Ink_Ravioli.png",
          desc: "Temporarily protects from debuffs.",
          type: "Completed",
          alsoRecipe: "true",
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Ingredients", null, {});
  },
};
