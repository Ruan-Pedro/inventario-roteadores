const express = require('express')
const userRouter = express.Router()
const bodyParser = require('body-parser')
const userController = require('../controllers/userController')
const User = require('../models/modelUser')
require('dotenv').config()

userRouter.use((req,res, next)=>{
    next()
})

userRouter.post('/register', bodyParser.json(), (req,res,next)=>{
    let userModel = req.body
    userController.registerUser(userModel).then(result =>{
        console.log(userModel)
        res.status(200).json(result)
    })
})
// router.post('/login', userController)

module.exports = userRouter