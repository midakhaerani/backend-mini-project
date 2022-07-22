const db = require('../config/db')

class ModelMerchant {
    static createMerchant (body) {
        const query = 'INSERT INTO merchants (merchant_id, password, name, address, join_date, phone_number) VALUES (?, ?, ?, ?, ?, ?)'
        db.run (query, [body.merchant_id, body.password, body.name, body.address, body.join_date, body.phone_number], function (err) {
            if (err) {
                console.log(err)
            }
        })
    }

    static deleteMerchant (body) {
        const query = 'DELETE from merchants WHERE merchant_id = ?'
        const merchantId = req.params.id
        db.run (query, [merchantId], function (err) {
            if (err) {
                console.log(err)
            }
        })
        res.status(200).json({ message: 'Success delete merchant data!' })
    }

    static findMerchantByNameAndPassword (name, password) {
        const query = `SELECT * FROM merchants WHERE name = '${name}' AND password = '${password}'`
        return new Promise (function(resolve, reject) {
            db.get (query, (err, row) => {
                resolve(row)
                if (err) {
                    console.log(err)
                }
            })
        })
    }
}

module.exports = ModelMerchant