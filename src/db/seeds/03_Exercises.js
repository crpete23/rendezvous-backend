
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        {id: 1, name: 'bicep curl', type: 'lift'},
        {id: 2, name: 'running/walking', type: 'cardio'},
        {id: 3, name: 'rowing', type: 'cardio'}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('exercises_id_seq', (SELECT MAX(id) FROM exercises));`)
    })
}
