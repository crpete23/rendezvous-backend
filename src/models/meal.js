const db = require('../db')

function getAll(){
  return db('meals')
}

function getId(id){
  return db('meals')
    .where({
      id: id
    })
}

function createMeal(meal){
  return db('meals')
    .insert(meal)
    .returning('*')
    .then(([resp]) => resp)
}

function updateMeal(id, update){
  return getId(id)
    .then(([meal]) => {
      return db('meals')
        .update({
          ...meal,
          ...update,
          updated_at: new Date()
        })
        .where({
          id: meal.id
        })
        .returning('*')
        .then(([resp])=> resp)
    })
}

function deleteMeal(id){
  return db('meals')
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
  createMeal,
  updateMeal,
  deleteMeal
}
