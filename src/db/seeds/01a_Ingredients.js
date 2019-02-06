
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Beef Patty', calories: 285, protein: 24, carbs: 0, fat: 21, PUFAs: 0, g: 113},
        {id: 2, name: 'White Rice', calories: 312, protein: 6, carbs: 72, fat: 0, PUFAs: 0, g: 300},
        {id: 3, name: 'Basic Meat & Potatoes: 90/10', calories: 712, protein: 62, carbs: 44, fat: 32, PUFAs: 2},
        {id: 4, name: 'Banana (med)', calories: 110, protein: 1, carbs: 30, fat: 0, PUFAs: 0, g: 120},
        {id: 5, name: 'Strawberries (1 cup)', calories: 50, protein: 1, carbs: 12, fat: 0, PUFAs: 0, g: 150},
        {id: 6, name: 'Fage Greek Yogurt 0% (1 cup)', calories: 130, protein: 23, carbs: 9, fat: 0, PUFAs: 0, g: 227}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('ingredients_id_seq', (SELECT MAX(id) FROM ingredients));`)
    })
}
