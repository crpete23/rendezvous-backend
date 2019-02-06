const model = require('../models/ingredients')
const {parseToken} = require('../lib/auth')

async function getAll(req, res, next){
  try{
    const response = await model.getAll()
    res.status(200).json({
      "ingredients": response
    })
  } catch (e){
    next({status:400, error: `Unable to obtain ingredients`})
  }
}

async function getId(req, res, next){
  try{
    const id = req.params.id

    const response = await model.getId(id)
    res.status(200).json({"ingredient": response})
  } catch (e){
    next({status:400, error: `Unable to find specified ingredient`})
  }
}

async function createIngredient(req, res, next){
  try{
    const response = await model.createIngredient({ ...req.body})

    res.status(201).json({"ingredient": response})
  } catch (e){
    next({status: 400, error: `Ingredient could not be created`})
  }
}

async function updateIngredient(req, res, next){
  try{
    const id = req.params.id

    const response = await model.updateIngredient(id, req.body)

    res.status(200).json({"ingredient": response})
  } catch (e){
    next({status: 400, error: `Unable to update specified ingredient`})
  }
}

async function deleteIngredient(req, res, next){
  try{
    const id = req.params.id

    const response = await model.deleteIngredient(id)

    res.status(200).json({"ingredient": response})
    } catch (e){
      next({status: 400, error: `Unable to delete specified ingredient`})
    }
}

module.exports = {
  getAll,
  getId,
  createIngredient,
  updateIngredient,
  deleteIngredient
}
