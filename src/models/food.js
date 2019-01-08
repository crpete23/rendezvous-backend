const db = require('../db')

function getAll(userId){
  return db('meals')
    .join('food_logs', 'meals.id', '=', 'food_logs.meal')
    .where({user_id: userId})
}

function getId(userId, id){
  return db('food_logs')
    .where({
      user_id: userId,
      id: id
    })
}

function createLog(log){
  return db('food_logs')
    .insert(log)
    .returning('*')
    .then(([resp]) => resp)
}

function updateLog(userId, id, update){
  return getId(userId, id)
    .then(([log]) => {
      return db('food_logs')
        .update({
          ...log,
          ...update,
          updated_at: new Date()
        })
        .where({
          user_id: log.user_id,
          id: log.id
        })
        .returning('*')
        .then(([resp])=> resp)
    })
}

function deleteLog(userId, id){
  return db('food_logs')
    .where({
      user_id: userId,
      id: id
    })
    .del()
    .returning('*')
    .then(([resp]) => resp)
}

module.exports = {
  getAll,
  getId,
  createLog,
  updateLog,
  deleteLog
}
