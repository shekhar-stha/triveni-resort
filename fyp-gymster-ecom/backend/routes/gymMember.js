const route = require("express").Router()
const GymMember = require('../models/GymMemberModel')
const User = require('../models/UserModel')
const Membership = require('../models/MembershipModel')
const bcrypt = require('bcrypt')
const auth = require('../middleware/auth')


// Register Admin
route.post("/addMember/:id", async (req, res) => {
    const password = req.body.password
    const confirm_password = req.body.confirm_password
    try {
        if (password === confirm_password) {
            const salt = bcrypt.genSaltSync(10)
            const hashPassword = await bcrypt.hash(password, salt)
            const hashConfirm_password = await bcrypt.hash(confirm_password, salt)
            try {
                const memberShipData = await Membership.findOne({ where: { id: req.params.id } })
                console.log(memberShipData)
                if (memberShipData !== null) {
                    const data = User.build({ ...req.body, password: hashPassword, confirm_password: hashConfirm_password })
                    data.role = 'gym_member'
                    await data.save()
                    const memberData = GymMember.build({ ...req.body, userId: data.id, membershipId: req.params.id })
                    await memberData.save()
                    res.status(200).json(memberData.dataValues)
                }
                else {
                    res.status(400).json("membership not valid")
                }
            } catch (error) {
                res.status(500).json(error)
            }
        }
        else {
            res.status(400).json("Password didn't match")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})


// Show member
route.get("/getMember", auth.verifyAdmin, async (req, res) => {
    try {
        const data = await GymMember.findAll();
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)
    }
})

// Show one member
route.get("/getMember/:id", auth.verifyUser, async (req, res) => {
    try {
        const data = await GymMember.findAll({ where: { userId: req.params.id } });
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error)
    }
})

// update member
route.put("/updateMember/:id", auth.verifyGym_member, async (req, res) => {
    try {
        const data = await GymMember.update(req.body, { where: { id: req.params.id } });
        const updatedData = await GymMember.findAll({ where: { userId: req.params.id } });
        res.status(200).json(updatedData)
    } catch (error) {
        res.status(500).json(error)
    }
})


// update user to gym member
route.put("/updateUserToMember/:memberShipId", auth.verifyUser, async (req, res) => {
    try {
        const userInfo = await User.findOne({ where: { id: userData.id } })
        if (userInfo.role === 'user' || userInfo.role === 'admin' || userInfo.role === 'gym_member') {
            await User.update({ ...userInfo, role: 'gym_member' }, { where: { id: userData.id } })
            await GymMember.create({...req.body, userId: userInfo.id, membershipId: req.params.id })
        }
        else {
            res.status(400).json('you are not authorized')
        }
        // const data = await GymMember.update(req.body, { where: { id: req.params.id } });
        // res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = route;