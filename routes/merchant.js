const express = require('express')
const router = express.Router()
const db = require('../config/db')
const ControllerMerchant = require('../controllers/controllerMerchant')
const Middleware = require('../middlewares/middleware')

router.post ('/', Middleware.checkAuth, ControllerMerchant.createMerchant)

router.delete ('/:merchant_id', ControllerMerchant.deleteMerchant)

router.post ('/login', ControllerMerchant.login)

module.exports = router