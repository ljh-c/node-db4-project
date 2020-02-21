
exports.seed = function(knex) {
  // 00-cleanup deleted all existing data
  return knex('recipes').insert([
    {recipe_name: 'Boiled Water'},
    {recipe_name: 'Ice Cubes'},
    {recipe_name: 'Strawberry Infused Water'},
    {recipe_name: 'Chocolate Moose' }
  ]);
};
