
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('body_logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('body_logs').insert([
        {id: 1, user_id: 1, date: '12052018', weight: 190, fat_perc: 20, lean: 80, fat: 18},
        {id: 2, user_id: 1, date: '12062018', weight: 192, fat_perc: 20, lean: 79, fat: 17},
        {id: 3, user_id: 2, date: '12052018', weight: 190, fat_perc: 20, lean: 80, fat: 18},
        {id: 4, user_id: 1, date: '12062018', weight: 190, fat_perc: 20, lean: 80, fat: 18}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('body_logs_id_seq', (SELECT MAX(id) FROM body_logs));`)
    })
}
