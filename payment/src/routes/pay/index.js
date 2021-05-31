const Pay = require('express').Router()
const { create_session } = require('./pay')

Pay.get('/pay', create_session)

module.exports = Pay