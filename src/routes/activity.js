const router = require('express').Router()
const ctrl = require('../controllers/activity')
const auth = require('../lib/auth')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getId)
router.post('/', auth.isLoggedIn, ctrl.createActivity)
router.patch('/:id', auth.isLoggedIn, ctrl.updateActivity)
router.delete('/:id', auth.isLoggedIn, ctrl.deleteActivity)

module.exports = router
