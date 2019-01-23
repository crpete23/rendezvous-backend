const db = require('../db')

function getAll(){
  return db('exercises')
}

function getId(id){
  return db('exercises')
    .where({
      id: id
    })
}

function createActivity(activity){
  return db('exercises')
    .insert(activity)
    .returning('*')
    .then(([resp]) => resp)
}

function updateActivity(id, update){
  return getId(id)
    .then(([activity]) => {
      return db('exercises')
        .update({
          ...activity,
          ...update,
          updated_at: new Date()
        })
        .where({
          id: activity.id
        })
        .returning('*')
        .then(([resp])=> resp)
    })
}

function deleteActivity(id){
  return db('exercises')
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
  createActivity,
  updateActivity,
  deleteActivity
}
