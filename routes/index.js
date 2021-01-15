const router = require('express').Router()

router.use('/api', require('./raffles.js'))

module.exports = router
