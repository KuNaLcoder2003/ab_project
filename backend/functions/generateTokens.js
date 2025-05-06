const jwt = require('jsonwebtoken')
const secret_key = require('../secret')

const generateToken = (userId) => {
    try {
        const token = jwt.sign({id : userId} , secret_key)
        if(token) {
            return {token , valid : true}
        }
        else {
            return { valid : false}
        }
    } catch (error) {
        console.log(error)
        return {
            err : error,
            valid : false
        }
    }
}
module.exports = generateToken
