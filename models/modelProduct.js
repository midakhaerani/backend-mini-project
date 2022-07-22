const db = require('../config/db')

class ModelProduct {
    static createProduct (body) {
        const query = 'INSERT INTO products (product_id, name, quantity, price) VALUES (?, ?, ?, ?)'
        db.run (query, [body.product_id, body.name, body.quantity, body.price], function (err) {
            if (err) {
                console.log(err)
            }
        })
    }

    static deleteProduct (body) {
        const query = 'DELETE from products WHERE product_id = ?'
        db.run (query, [body.product_id], function (err) {
            if (err) {
                console.log(err)
            }
        })
        res.status(200).json({ message: 'Success delete product data!' })
    }

    static updateProduct (body) {
        const query = 'UPDATE products SET name = ? WHERE product_id = ?'
        db.run (query, [body.name, body.product_id], function (err) {
            if (err) {
                console.log(err)
            }
        })
        res.status(200).json({ message: 'Success update product data!' })
    }

    static getProduct (body) {
        const query = 'SELECT * FROM products'
        db.all (query, (err, row) => {
            res.status(200).json(row)
        })
    }
}

module.exports = ModelProduct