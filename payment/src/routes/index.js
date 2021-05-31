const router = require('express').Router()
const Pay = require('./pay')
const Apk = require('./download')

// Routes project router
router.use(Pay)
      .use(Apk)

module.exports = router