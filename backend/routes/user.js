const express = require('express');
const router = express.Router();
const { Users } = require('../db');
const generateToken = require('../functions/generateTokens')


router.post('/signup', async (req, res) => {
    const { first_name, last_name, username, password } = req.body.user_details;
    try {
        const alreadyExists = await Users.findOne({ username: username });
        if (alreadyExists) {
            return res.status(400).json({
                message: 'User Already Exists',
                valid: false
            })
        }

        const new_user = new Users({
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: password,
        })

        await new_user.save();

        const response = generateToken(new_user._id);
        if (!response.valid) {
            return res.status(400).json({
                message: 'Try again',
                valid: false,
            })
        }
        res.status(200).json({
            valid: true,
            token: response.token,
            user: new_user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
})

router.post('/signin', async (req, res) => {
    const { username, password } = req.body
    

    try {
        const user = await Users.findOne({ username: username, password: password })
        if (!user) {
            return res.status(401).json({
                message: 'User does not exist',
                valid: false
            })
        }
        const response = generateToken(user._id);
        if (!response.valid) {
            return res.status(400).json({
                message: 'Try again',
                valid: false,
            })
        }
        res.status(200).json({
            valid: true,
            token: response.token,
            user: user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
})

module.exports = router;