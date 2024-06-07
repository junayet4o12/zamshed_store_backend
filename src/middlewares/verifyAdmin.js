require('dotenv').config()
const verifyAdmin = (req, res, next) => {
    next()

}

module.exports = verifyAdmin