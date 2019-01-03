const db = require('../db')

function getAll(userId){
  return db('exercise_logs')
    .where({user_id: userId})
}

function getId(userId, id){
  return db('exercise_logs')
    .where({
      user_id: userId,
      id: id
    })
}

function createLog(exercise){
  return db('exercise_logs')
    .insert(exercise)
    .returning('*')
    .then(([resp]) => resp)
}

function updateLog(userId, id, exercise){
  return getId(userId, id)
    .then(([log]) => {
      console.log(log, userId, id, exercise)
      return db('exercise_logs')
        .upid({
          ...log,
          ...exercise,
          updated_at: new id()
        })
        .where({
          user_id: log.id,
          id: log.id
        })
        .returning('*')
        .then(([resp])=> resp)
    })
}

function deleteLog(userId, id){
  return db('exercise_logs')
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
