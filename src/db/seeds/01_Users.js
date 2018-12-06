const { hashSync } = require('bcryptjs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'chris', doc_last_name: 'peterson', dob: 04121992, email: 'crpete23@gmail.com', password: hashSync('password')},
        {id: 2, first_name: 'josh', doc_last_name: 'mischung', dob: 01011991, email: 'josh.mischung@gmail.com', password: hashSync('password')}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
    })
}
