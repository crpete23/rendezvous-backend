const router = require('express').Router()
const ctrl = require('../controllers/body')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.getAll)
router.get('/:date', auth.isLoggedIn, ctrl.getDate)
router.post('/', auth.isLoggedIn, ctrl.createLog)
router.patch('/:date', auth.isLoggedIn, ctrl.updateLog)
router.delete('/:date', auth.isLoggedIn, ctrl.deleteLog)

module.exports = router
