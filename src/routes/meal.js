const router = require('express').Router()
const ctrl = require('../controllers/meal')
const auth = require('../lib/auth')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getId)
router.post('/', auth.isLoggedIn, ctrl.createMeal)
router.patch('/:id', auth.isLoggedIn, ctrl.updateMeal)
router.delete('/:id', auth.isLoggedIn, ctrl.deleteMeal)

module.exports = router
