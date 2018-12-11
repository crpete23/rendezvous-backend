exports.up = function (knex, Promise) {
  return knex.schema.createTable('food_logs', table => {
    table.increments()
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.integer('date').notNullable()
    table.integer('time').notNullable()
    table.integer('meal').notNullable()
    table.foreign('meal').references('meals.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('food_logs')
}
