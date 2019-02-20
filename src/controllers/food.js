const model = require('../models/food')
const {parseToken} = require('../lib/auth')

function getAll(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const response = await model.getAll(userId)
    res.status(200).json({
      "food_logs": response
    })
  } catch (e){
    next({status:400, error: `Unable to get food logs`})
  }
}

async function getId(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const id = req.params.id

    const response = await model.getId(userId, id)
    res.status(200).json({"food_log": response})
  } catch (e){
    next({status:400, error: `Unable to find specified food log`})
  }
}

async function createLog(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const response = await model.createLog({ ...req.body, user_id: userId})

    res.status(201).json({"food_log": response})
  } catch (e){
    next({status: 400, error: `Log could not be created`})
  }
}

async function updateLog(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const id = req.params.id

    const response = await model.updateLog(userId, id, req.body)

    res.status(200).json({"food_log": response})
  } catch (e){
    next({status: 400, error: `Unable to update specified log`})
  }
}

async function deleteLog(req, res, next){
  try{

    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const id = req.params.id

    const response = await model.deleteLog(userId, id)

    res.status(200).json({"food_log": response})
    } catch (e){
      next({status: 400, error: `Unable to delete specified log`})
    }
}

module.exports = {
  getAll,
  getId,
  createLog,
  updateLog,
  deleteLog
}
