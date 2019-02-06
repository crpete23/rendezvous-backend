exports.up = function (knex, Promise) {
  return knex.schema.createTable('groups', table => {
    table.increments()
    table.text('name').notNullable().unique()
    table.jsonb('ingredients').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('groups')
}
