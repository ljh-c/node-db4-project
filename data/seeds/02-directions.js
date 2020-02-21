
exports.seed = function(knex) {
  return knex('directions').insert([
    {
      recipe_id: 1,
      step_number: 1,
      directions: 'Place water in pot. Set burner to high and bring to a boil. Turn burner off and remove pot from heat. Use immediately.'
    },
    {
      recipe_id: 2,
      step_number: 1,
      directions: 'Fill ice tray to the sink and fill with water.'
    },
    {
      recipe_id: 2,
      step_number: 2,
      directions: 'Place the tray in the freezer. Leave in freezer for 4-6 hours.'
    },
    {
      recipe_id: 3,
      step_number: 1,
      directions: 'Put ingredients in a sealed jar.'
    },
    {
      recipe_id: 3,
      step_number: 2,
      directions: 'Let mixture infuse for at least 2 hours or overnight.'
    },
    {
      recipe_id: 4,
      step_number: 1,
      directions: 'Melt chocolate in an industrial-sized double boiler.'
    },
    {
      recipe_id: 4,
      step_number: 2,
      directions: 'Drench the entire moose in melted chocolate, covering it completely with a thin coating.'
    },
    {
      recipe_id: 4,
      step_number: 3,
      directions: 'Top with fresh strawberries.'
    }
  ]);
};
