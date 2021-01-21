const router = require('express').Router()
const { Campaign, User } = require('../models')


router.get('/campaigns', (req, res) => {
  Campaign.find()
    .then(campaigns => res.json(campaigns))
    .catch(err => console.log(err))
})

router.post('/campaigns', (req, res) => {
  Campaign.create(req.body)
    .then(campaign => res.json(campaign))
    .catch(err => console.log(err))
})

router.put('/campaigns/:id', (req, res) => {
  Campaign.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/campaigns/:id', (req, res) => {
  Campaign.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router