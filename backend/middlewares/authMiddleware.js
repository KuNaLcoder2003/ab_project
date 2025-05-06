const jwt = require('jsonwebtoken')
const secret_key = require('../secret')

const authMiddleWare = (req, res , next)=>{
    try {
        const authToken = req.headers.authorizationl
        if(!authToken || !authToken.startsWith('Bearer ')){
            return res.status(401).json({

            })
        }
        const token = authToken.split(' ')[1];
        const verified = jwt.verify(token , secret_key);
        if(verified){
            req.userId = verified.id
            next()
        }
        else {
            return res.status(401).json({
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            message : 'Something went wrong'
        })
    }
}

module.exports = authMiddleWare;