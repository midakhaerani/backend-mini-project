const sqlite3 = require('sqlite3').verbose()
const dbMerchant = new sqlite3.Database('merchants.db')
const dbProduct = new sqlite3.Database('products.db')

module.exports = dbMerchant
module.exports = dbProduct