const db = require('../data/db-config');

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('recipe_ingredients as ri')
    .join('ingredients as i', 'ri.ingredient_id', 'i.id')
    .select('ri.recipe_id', 'i.ingredient_name', 'ri.quantity', 'ri.unit')
    .where({ recipe_id: recipe_id });
}

function getInstructions(recipe_id) {
  return db('recipes as r')
    .join('directions as d', 'r.id', 'd.recipe_id')
    .select('d.id', 'r.recipe_name', 'd.step_number', 'd.directions')
    .where({ recipe_id: recipe_id })
    .orderBy('step_number');
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};