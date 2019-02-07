
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {id: 1, name: 'strawberry banana smoothie', ingredients: {4:1, 5:0.5, 6:0.5}} 
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('groups_id_seq', (SELECT MAX(id) FROM groups));`)
    })
}
