const model = require('../models/body')
const {parseToken} = require('../lib/auth')

async function getAll(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const response = await model.getAll(userId)
    res.status(200).json({
      "body_logs": response
    })
  } catch (e){
    next({status:400, error: `Unable to get body logs`})
  }
}

async function getDate(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const date = parseInt(req.params.date)

    const response = await model.getDate(userId, date)
    res.status(200).json({"body_log": response})
  } catch (e){
    next({status:400, error: `Unable to find specified body log`})
  }
}

async function createLog(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const response = await model.createLog({ ...req.body}, userId)

    res.status(201).json({"body_log": response})
  } catch (e){
    next({status: 400, error: `Log could not be created`})
  }
}

async function updateLog(req, res, next){
  try{
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const date = parseInt(req.params.date)

    const response = await model.updateLog(userId, date, req.body)

    res.status(200).json({"body_log": response})
  } catch (e){
    next({status: 400, error: `Unable to update specified log`})
  }
}

async function deleteLog(req, res, next){
  try{

    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const date = parseInt(req.params.date)

    const response = await model.deleteLog(userId, date)

    res.status(200).json({"body_log": response})
    } catch (e){
      next({status: 400, error: `Unable to delete specified log`})
    }
}

module.exports = {
  getAll,
  getDate,
  createLog,
  updateLog,
  deleteLog
}
