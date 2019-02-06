const router = require('express').Router()
const ctrl = require('../controllers/ingredients')
const auth = require('../lib/auth')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getId)
router.post('/', auth.isLoggedIn, ctrl.createIngredient)
router.patch('/:id', auth.isLoggedIn, ctrl.updateIngredient)
router.delete('/:id', auth.isLoggedIn, ctrl.deleteIngredient)

module.exports = router
