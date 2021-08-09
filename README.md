# Queen Of Sauce
![](https://steamuserimages-a.akamaihd.net/ugc/322377524433516800/ACB79DAC2A3BA4D55618597B353F624252EC3120/?imw=128&imh=128&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true)

Queen of Sauce is a recipe planning and cooking app set in the universe of Stardew Valley, based on the town's most popular cooking program.

[Live Heroku App](https://queenofsauce.herokuapp.com/)

To run the project locally, follow the instructions below.
1. Clone the repo.
2. Run `npm install` in both the frontend and backend folders.
3. Run `npm start`  in both the frontend and backend folders.
4. Navigate to http://localhost:3000/ and begin using the app!

## Links
[Database Schema and Backend Routes](https://github.com/cheshirekate8/queenOfSauce/wiki/Database-Schema-and-Backend-Routes)

[MVP Feature List](https://github.com/cheshirekate8/queenOfSauce/wiki/MVP-Feature-List)

[Frontend Routes](https://github.com/cheshirekate8/queenOfSauce/wiki/Wireframe-and-Frontend-Routes)

## Application Stack
Queen of Sauce is built on a Sequelize, Express, Redux, React stack. On my backend I use Express and Sequelize, and on the frontend React and Redux.

## Views
Once app is entirely complete, I will add this!

## Fututre Features
* Custom Recipes, which a user can CRUD from their kitchen dashboard.
* Users can add ingredients to their fridges, and are then able to "cook" those ingredients using either their custom recipes or from the recipes tab.
* A filterable search feature.
* Include <b>every</b> in game recipe and ingredient, with signifiers to distingush beween cannon and user-created recipes and ingredients.

## Code Brag

Sequelize has an interesting feature where if two rows are identical on a joins table, except for their unique primary key, Sequelize will return ONLY one of them. To work around this logic, it took quite a few for loops but I succeeded! A nested loop was needed to be able to have access to all necessary information, and assign the count for each ingredient.

```
let ingredients = [];
    if (fridges) {
        fridges?.forEach(fridge => {
            ingredients.push(fridge.Ingredients)
            if (ingredients) {
                ingredients.forEach(async (ingredientObj) => {
                    ingredientObj.forEach( async (ingredient, i) => {
                        let count = await dispatch(kitchenActions.countIngredients(fridge.id, ingredient.id))
                        ingredient['count'] = count;
                        console.log(ingredient)
                    })
                })
            }
        })
    }
```
