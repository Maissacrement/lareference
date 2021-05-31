const Apk = require('express').Router()
const { local } = require('./apk')

Apk.get('/apk/local', local)

module.exports = Apk