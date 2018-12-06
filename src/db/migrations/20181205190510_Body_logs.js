exports.up = function (knex, Promise) {
  return knex.schema.createTable('body_logs', table => {
    table.increments()
    table.int('user_id').notNullable()
    table.foreign('user_id').references.('users.id').onDelete('CASCADE')
    table.int('date').notNullable()
    table.int('weight').notNullable()
    table.int('fat_perc')
    table.int('lean')
    table.int('fat')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('body_logs')
}
