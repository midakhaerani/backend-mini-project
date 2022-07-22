const jwt = require('jsonwebtoken')

class Middleware {
    static checkAuth (req, res, next) {
    const token = req.header.authorization
    jwt.verify (token, 'scrt', (verifiedJwt) => {
        if (verifiedJwt) {
            next ()
        } else {
            res.status(401).json({ message: 'Unauthorized' })
        }
    })
    }
}

module.exports = Middleware