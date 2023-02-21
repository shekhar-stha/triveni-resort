const route = require("express").Router()
const Diet = require('../models/DietModel')
const auth = require('../middleware/auth')


route.post('/postDiet', auth.verifyGym_trainer, async (req, res) => {
    try {
        const data = await Diet.create(req.body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})


route.put('/updateDiet/:id', auth.verifyGym_trainer, async (req, res) => {
    try {
        const data = await Diet.findOne({ where: { id: req.params.id } })
        if (data !== null) {
            await Diet.update(req.body, { where: { id: req.params.id } })
            res.status(200).send("successfully updated")
        } else {
            res.status(200).send("Diet not found")
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

route.get("/getDiet", auth.verifyUser, async (req, res) => {
    try {
        const data = await Diet.findAll();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error)
    }
})


// route.get("/getDiet", auth.verifyUser, async (req, res) => {
//     try {
//         const data = await Diet.findAll();
//         res.status(200).json(data)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

route.delete("/deleteDiet/:id", auth.verifyUser, async (req, res) => {
    const data = await Diet.findOne({ where: { id: req.params.id } })
    try {
        if (data !== null) {
            await Diet.destroy({ where: { id: req.params.id } });
            res.status(200).json("Successfully deleted")
        } else {
            res.status(200).send("Diet not found")
        }
    } catch (error) {
        res.status(500).send(error)

    }
})


module.exports = route