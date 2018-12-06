exports.up = function (knex, Promise) {
  return knex.schema.createTable('exercise_logs', table => {
    table.increments()
    table.int('user_id').notNullable()
    table.foreign('user_id').references.('users.id').onDelete('CASCADE')
    table.int('date').notNullable()
    table.int('time').notNullable()
    table.int('exercise').notNullable()
    table.foreign('exercise').references.('exercise.id').onDelete('CASCADE')
    table.int('weight')
    table.int('reps')
    table.int('duration')
    table.int('rest')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('exercise_logs')
}
