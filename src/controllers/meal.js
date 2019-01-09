const model = require('../models/meal')
const {parseToken} = require('../lib/auth')

async function getAll(req, res, next){
  try{
    const response = await model.getAll()
    res.status(200).json({
      "meals": response
    })
  } catch (e){
    next({status:400, error: `Unable to obtain meals`})
  }
}

async function getId(req, res, next){
  try{
    const id = req.params.id

    const response = await model.getId(id)
    res.status(200).json({"meal": response})
  } catch (e){
    next({status:400, error: `Unable to find specified meal`})
  }
}

async function createMeal(req, res, next){
  try{
    const response = await model.createMeal({ ...req.body})

    res.status(201).json({"meal": response})
  } catch (e){
    next({status: 400, error: `Meal could not be created`})
  }
}

async function updateMeal(req, res, next){
  try{
    const id = req.params.id

    const response = await model.updateMeal(id, req.body)

    res.status(200).json({"meal": response})
  } catch (e){
    next({status: 400, error: `Unable to update specified meal`})
  }
}

async function deleteMeal(req, res, next){
  try{
    const id = req.params.id

    const response = await model.deleteMeal(id)

    res.status(200).json({"meal": response})
    } catch (e){
      next({status: 400, error: `Unable to delete specified meal`})
    }
}

module.exports = {
  getAll,
  getId,
  createMeal,
  updateMeal,
  deleteMeal
}
