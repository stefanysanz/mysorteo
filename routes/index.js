const router = require('express').Router()

router.use('/api', require('./campaignRoutes.js'))

module.exports = router
