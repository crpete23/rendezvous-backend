
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {id: 1, name: 'Mac and Cheese', calories: 250, protein: 10, carbs: 100, fat: 20, PUFAs: 2},
        {id: 2, name: 'Burger', calories: 500, protein: 80, carbs: 200, fat: 30, PUFAs: 10},
        {id: 3, name: 'Water', calories: 0, protein: 0, carbs: 0, fat: 0, PUFAs: 0}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('meals_id_seq', (SELECT MAX(id) FROM meals));`)
    })
}
