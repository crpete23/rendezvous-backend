const model = require('../models/activity')
const {parseToken} = require('../lib/auth')

async function getAll(req, res, next){
  try{
    const response = await model.getAll()
    res.status(200).json({
      "activities": response
    })
  } catch (e){
    next({status:400, error: `Unable to obtain activities`})
  }
}

async function getId(req, res, next){
  try{
    const id = req.params.id

    const response = await model.getId(id)
    res.status(200).json({"activity": response})
  } catch (e){
    next({status:400, error: `Unable to find specified activity`})
  }
}

async function createActivity(req, res, next){
  try{
    const response = await model.createActivity({ ...req.body})

    res.status(201).json({"activity": response})
  } catch (e){
    next({status: 400, error: `Activity could not be created`})
  }
}

async function updateActivity(req, res, next){
  try{
    const id = req.params.id

    const response = await model.updateActivity(id, req.body)

    res.status(200).json({"activity": response})
  } catch (e){
    next({status: 400, error: `Unable to update specified activity`})
  }
}

async function deleteActivity(req, res, next){
  try{
    const id = req.params.id

    const response = await model.deleteActivity(id)

    res.status(200).json({"activity": response})
    } catch (e){
      next({status: 400, error: `Unable to delete specified activity`})
    }
}

module.exports = {
  getAll,
  getId,
  createActivity,
  updateActivity,
  deleteActivity
}
