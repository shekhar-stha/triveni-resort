const route = require("express").Router()
const sequelize = require("../db/conn")
const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')


// register user
route.post("/addUser", async (req, res) => {
    const password = req.body.password
    const confirm_password = req.body.confirm_password
    try {
        if (password === confirm_password) {
            const salt = bcrypt.genSaltSync(10)
            const hashPassword = await bcrypt.hash(password, salt)
            const hashConfirm_password = await bcrypt.hash(confirm_password, salt)
            const data = User.build({ ...req.body, password: hashPassword, confirm_password: hashConfirm_password })
            data.role = 'user'
            await data.save()
            res.status(200).json(data.dataValues)
        }
        else {
            res.status(400).json("Password didn't match")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// Login User
route.post("/loginUser", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    try {
        const data = await User.findOne({ where: { username: username } })
        const passwordReq = data.dataValues.password
        const comparePw = await bcrypt.compare(password, passwordReq)
        if (!comparePw) res.status(400).json("User name and password didn't match")

        const token = jwt.sign({
            id: data.id,
            role: data.role
        }, "secretkey")
        
        const dataNeeded = {
            username: data.dataValues.username,
            role: data.dataValues.role,
            full_name: data.dataValues.full_name
        }

        res.status(200).cookie('token', token).json(dataNeeded)

    } catch (error) {
        res.status(500).json("User name and password didn't match")
    }
})


// Show User
route.get("/getUser",auth.verifyUser, async (req, res) => {
    const data = await User.findAll();
    res.status(200).json(data)
})


module.exports = route;