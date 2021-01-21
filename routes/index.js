const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./campaignRoutes.js'))
router.use('/api', require('./entryRoutes'))

module.exports = router
