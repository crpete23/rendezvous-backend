const db = require('../db')

function getAll(){
  return db('groups')
}

function getId(id){
  return db('groups')
    .where({
      id: id
    })
}

function createGroup(group){
  return db('groups')
    .insert(group)
    .returning('*')
    .then(([resp]) => resp)
}

function updateGroup(id, update){
  return getId(id)
    .then(([group]) => {
      return db('groups')
        .update({
          ...group,
          ...update,
          updated_at: new Date()
        })
        .where({
          id: group.id
        })
        .returning('*')
        .then(([resp])=> resp)
    })
}

function deleteGroup(id){
  return db('groups')
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
  createGroup,
  updateGroup,
  deleteGroup
}
