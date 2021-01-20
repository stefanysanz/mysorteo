const router = require('express').Router()
const { Entry, User } = require('../models')


router.get('/entries', (req, res) => {
  Entry.find()
    .then(entries => res.json(entries))
    .catch(err => console.log(err))
})

router.post('/entries', (req, res) => {
  Entry.create(req.body)
    .then(entry => res.json(entry))
    .catch(err => console.log(err))
})

router.put('/entries/:id', (req, res) => {
  Entry.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/entries/:id', (req, res) => {
  Entry.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router