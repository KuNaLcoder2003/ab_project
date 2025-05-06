const express = require('express');
const router = express.Router();
const userRouter = require('./user')
const fileRouter = require('./file')

router.use('/user' , userRouter)
router.use('/file' , fileRouter)

module.exports = router