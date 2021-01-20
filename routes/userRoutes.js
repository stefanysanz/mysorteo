const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/users/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body
  User.signup(new User({ firstName, lastName, email, password }), password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

router.post('/users/signin', (req, res) => {
  const { email, password } = req.body
  User.authenticate()(email, password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})

router.get('/users', (req, res) => {
  res.json(req.user)
})

module.exports = router