
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercise_logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise_logs').insert([
        {id: 1, user_id: 1, date: '12062018', time: 1200, exercise: 1, weight: 100, reps: 15, rest: 10},
        {id: 2, user_id: 1, date: '12062018', time: 1800, exercise: 3, duration: 60, rest: 0},
        {id: 3, user_id: 2, date: '12062018', time: 1200, exercise: 2, duration: 30, rest: 0},
        {id: 4, user_id: 2, date: '12062018', time: 1800, exercise: 3, duration: 60, rest: 10}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('exercise_logs_id_seq', (SELECT MAX(id) FROM exercise_logs));`)
    })
}
