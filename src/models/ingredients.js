const db = require('../db')

function getAll(){
  return db('ingredients')
}

function getId(id){
  return db('ingredients')
    .where({
      id: id
    })
}

function createIngredient(ingredient){
  return db('ingredients')
    .insert(ingredient)
    .returning('*')
    .then(([resp]) => resp)
}

function updateIngredient(id, update){
  return getId(id)
    .then(([ingredient]) => {
      return db('ingredients')
        .update({
          ...ingredient,
          ...update,
          updated_at: new Date()
        })
        .where({
          id: ingredient.id
        })
        .returning('*')
        .then(([resp])=> resp)
    })
}

function deleteIngredient(id){
  return db('ingredients')
    .where({
      id: id
    })
    .del()
    .returning('*')
    .then(([resp]) => resp)
}

module.exports = {
  getAll,
  getId,
  createIngredient,
  updateIngredient,
  deleteIngredient
}
