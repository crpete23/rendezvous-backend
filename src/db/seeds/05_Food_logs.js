
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('food_logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('food_logs').insert([
        {id: 1, user_id: 1, date: '12062018', time: 1200, meal: 1, food: {"meals":[{id: 1, name: 'Mac and Cheese', calories: 250, protein: 10, carbs: 100, fat: 20, PUFAs: 2, quantity:1}],"ingredients":[{id: 1, name: 'Beef Patty', calories: 285, protein: 24, carbs: 0, fat: 21, PUFAs: 0, g: 113, quantity:1}, {id: 2, name: 'White Rice', calories: 312, protein: 6, carbs: 72, fat: 0, PUFAs: 0, g: 300, quantity:1}]}},
        {id: 2, user_id: 1, date: '12062018', time: 1800, meal: 2, food: {"meals":[{id: 1, name: 'Mac and Cheese', calories: 250, protein: 10, carbs: 100, fat: 20, PUFAs: 2, quantity:1}],"ingredients":[{id: 1, name: 'Beef Patty', calories: 285, protein: 24, carbs: 0, fat: 21, PUFAs: 0, g: 113, quantity:1}, {id: 2, name: 'White Rice', calories: 312, protein: 6, carbs: 72, fat: 0, PUFAs: 0, g: 300, quantity:1}]}},
        {id: 3, user_id: 2, date: '12062018', time: 1200, meal: 1, food: {"meals":[{id: 1, name: 'Mac and Cheese', calories: 250, protein: 10, carbs: 100, fat: 20, PUFAs: 2, quantity:1}],"ingredients":[{id: 1, name: 'Beef Patty', calories: 285, protein: 24, carbs: 0, fat: 21, PUFAs: 0, g: 113, quantity:1}, {id: 2, name: 'White Rice', calories: 312, protein: 6, carbs: 72, fat: 0, PUFAs: 0, g: 300, quantity:1}]}},
        {id: 4, user_id: 2, date: '12062018', time: 1800, meal: 3, food: {"meals":[{id: 1, name: 'Mac and Cheese', calories: 250, protein: 10, carbs: 100, fat: 20, PUFAs: 2, quantity:1}],"ingredients":[{id: 1, name: 'Beef Patty', calories: 285, protein: 24, carbs: 0, fat: 21, PUFAs: 0, g: 113, quantity:1}, {id: 2, name: 'White Rice', calories: 312, protein: 6, carbs: 72, fat: 0, PUFAs: 0, g: 300, quantity:1}]}}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('food_logs_id_seq', (SELECT MAX(id) FROM food_logs));`)
    })
}
