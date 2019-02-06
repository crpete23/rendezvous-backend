exports.up = function (knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments()
    table.string('name').notNullable().unique()
    table.integer('calories')
    table.integer('protein')
    table.integer('carbs')
    table.integer('fat')
    table.integer('PUFAs')
    table.integer('g')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ingredients')
}
