const express = require('express')
const router = express.Router()
const db = require('../config/db')
const ControllerProduct = require('../controllers/controllerProduct')
const MiddleWare = require('../middlewares/middleware')

router.post ('/', ControllerProduct.createProduct)

router.delete ('/:product_id', ControllerProduct.deleteProduct)

router.put ('/:product_id', ControllerProduct.updateProduct)

router.get ('/', ControllerProduct.getProduct)

module.exports = router