exports.up = function (knex, Promise) {
  return knex.schema.createTable('body_logs', table => {
    table.increments()
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.integer('date').notNullable()
    table.integer('weight').notNullable()
    table.integer('fat_perc')
    table.integer('lean')
    table.integer('fat')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('body_logs')
}
