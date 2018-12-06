exports.up = function (knex, Promise) {
  return knex.schema.createTable('meals', table => {
    table.increments()
    table.string('name').notNullable().unique()
    table.int('calories')
    table.int('protein')
    table.int('carbs')
    table.int('fat')
    table.int('PUFAs')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('meals')
}
