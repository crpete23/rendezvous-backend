const db = require('../db')

function getAll(userId){
  return db('body_logs')
    .where({user_id: userId})
}

function getId(userId, id){
  return db('body_logs')
    .where({
      user_id: userId,
      id: id
    })
}

function createLog(body){
  return db('body_logs')
    .insert(body)
    .returning('*')
    .then(([resp]) => resp)
}

function updateLog(userId, id, body){
  return getId(userId, id)
    .then(([log]) => {
      return db('body_logs')
        .update({
          ...log,
          ...body,
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
  return db('body_logs')
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
