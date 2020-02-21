

exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      quantity: 2,
      unit: 'cups'
    },
    {
      recipe_id: 2,
      ingredient_id: 1,
      quantity: 2,
      unit: 'cups'
    },
    {
      recipe_id: 3,
      ingredient_id: 1,
      quantity: 1,
      unit: 'quart'
    },
    {
      recipe_id: 3,
      ingredient_id: 2,
      quantity: 6
    },
    {
      recipe_id: 4,
      ingredient_id: 2,
      quantity: 12
    },
    {
      recipe_id: 4,
      ingredient_id: 3,
      quantity: 80,
      unit: 'lbs'
    }
  ]);
};

