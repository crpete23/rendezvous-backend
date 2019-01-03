
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('food_logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('food_logs').insert([
        {id: 1, user_id: 1, date: '12062018', time: 1200, meal: 1},
        {id: 2, user_id: 1, date: '12062018', time: 1800, meal: 2},
        {id: 3, user_id: 2, date: '12062018', time: 1200, meal: 1},
        {id: 4, user_id: 2, date: '12062018', time: 1800, meal: 3}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('food_logs_id_seq', (SELECT MAX(id) FROM food_logs));`)
    })
}
