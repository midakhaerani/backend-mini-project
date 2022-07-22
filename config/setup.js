const db = require('./db')

const createMerchant = `
    CREATE TABLE merchants (
        merchant_id     INTEGER PRIMARY KEY,
        password        VARCHAR NOT NULL,
        name            VARCHAR NOT NULL,
        address         VARCHAR NOT NULL,
        join_date       VARCHAR NOT NULL,
        phone_number    INTEGER NOT NULL
    )
`

const createProduct = `
    CREATE TABLE products (
        product_id      INTEGER PRIMARY KEY,
        name            VARCHAR NOT NULL,
        quantity        INTEGER NOT NULL,
        Price           INTEGER NOT NULL
    )
`

db.serialize (() => {
    db.run (createMerchant, (err) => {
        if (!err) {
            console.log('Table created')
        } else {
            console.log(err)
        }
    })

    db.run (createProduct, (err) => {
        if (!err) {
            console.log('Table created')
        } else {
            console.log(err)
        }
    })
})