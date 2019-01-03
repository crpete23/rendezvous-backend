const router = require('express').Router()
const ctrl = require('../controllers/body')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.getAll)
router.get('/:id', auth.isLoggedIn, ctrl.getId)
router.post('/', auth.isLoggedIn, ctrl.createLog)
router.patch('/:id', auth.isLoggedIn, ctrl.updateLog)
router.delete('/:id', auth.isLoggedIn, ctrl.deleteLog)

module.exports = router
