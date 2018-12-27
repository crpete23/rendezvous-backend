const db = require('../db')

function getAll(userId){
  return db('body_logs')
    .where({user_id: userId})
}

function getDate(userId, date){
  return db('body_logs')
    .where({
      user_id: userId,
      date: date
    })
}

function createLog(body){
  return db('body_logs')
    .insert(body)
    .returning('*')
    .then(([resp]) => resp)
}

function updateLog(userId, date, body){
  return getDate(userId, date)
    .then(([log]) => {
      console.log(log, userId, date, body)
      return db('body_logs')
        .update({
          ...log,
          ...body,
          updated_at: new Date()
        })
        .where({
          user_id: log.id,
          date: log.date
        })
        .returning('*')
        .then(([resp])=> resp)
    })
}

function deleteLog(userId, date){
  return db('body_logs')
    .where({
      user_id: userId,
      date: date
    })
    .del()
    .returning('*')
    .then(([resp]) => resp)
}

module.exports = {
  getAll,
  getDate,
  createLog,
  updateLog,
  deleteLog
}
