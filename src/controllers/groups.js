const model = require('../models/groups')
const {parseToken} = require('../lib/auth')

async function getAll(req, res, next){
  try{
    const response = await model.getAll()
    res.status(200).json({
      "groups": response
    })
  } catch (e){
    next({status:400, error: `Unable to obtain groups`})
  }
}

async function getId(req, res, next){
  try{
    const id = req.params.id

    const response = await model.getId(id)
    res.status(200).json({"group": response})
  } catch (e){
    next({status:400, error: `Unable to find specified group`})
  }
}

async function createGroup(req, res, next){
  try{
    const response = await model.createGroup({ ...req.body})

    res.status(201).json({"group": response})
  } catch (e){
    next({status: 400, error: `Group could not be created`})
  }
}

async function updateGroup(req, res, next){
  try{
    const id = req.params.id

    const response = await model.updateGroup(id, req.body)

    res.status(200).json({"group": response})
  } catch (e){
    next({status: 400, error: `Unable to update specified group`})
  }
}

async function deleteGroup(req, res, next){
  try{
    const id = req.params.id

    const response = await model.deleteGroup(id)

    res.status(200).json({"group": response})
    } catch (e){
      next({status: 400, error: `Unable to delete specified group`})
    }
}

module.exports = {
  getAll,
  getId,
  createGroup,
  updateGroup,
  deleteGroup
}
