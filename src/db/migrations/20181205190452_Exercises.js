exports.up = function (knex, Promise) {
  return knex.schema.createTable('exercises', table => {
    table.increments()
    table.string('name').notNullable().unique()
    table.string('type').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('exercises')
}
