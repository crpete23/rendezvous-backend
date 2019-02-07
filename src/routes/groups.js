const router = require('express').Router()
const ctrl = require('../controllers/groups')
const auth = require('../lib/auth')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getId)
router.post('/', auth.isLoggedIn, ctrl.createGroup)
router.patch('/:id', auth.isLoggedIn, ctrl.updateGroup)
router.delete('/:id', auth.isLoggedIn, ctrl.deleteGroup)

module.exports = router
