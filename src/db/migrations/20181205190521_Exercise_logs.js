exports.up = function (knex, Promise) {
  return knex.schema.createTable('exercise_logs', table => {
    table.increments()
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.string('date').notNullable()
    table.integer('time').notNullable()
    table.integer('exercise').notNullable()
    table.foreign('exercise').references('exercises.id').onDelete('CASCADE')
    table.integer('weight')
    table.integer('reps')
    table.integer('duration')
    table.integer('rest')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('exercise_logs')
}
