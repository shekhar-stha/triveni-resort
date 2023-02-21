const route = require("express").Router()
const { where } = require("sequelize")
const auth = require('../middleware/auth')
const ShippingDetails = require('../models/ShippingDetailsModel')


route.post('/postShippingDetails', auth.verifyUser, async (req, res) => {
    try {
        const data = await ShippingDetails.create({ ...req.body, userId: userData.id })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }

})

route.put('/updateShippingDetails/:id', auth.verifyUser, async (req, res) => {
    try {
        const data = await ShippingDetails.findOne({ where: { id: req.params.id } })
        if (data !== null) {
            await ShippingDetails.update(req.body, { where: { id: req.params.id } })
            res.status(200).send("successfully updated")
        } else {
            res.status(200).send("Invalid Command")
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

route.get("/getShippingDetails", auth.verifyUser, async (req, res) => {
    try {
        const data = await ShippingDetails.findAll();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error)
    }
})

route.get("/getShippingDetails/:id", auth.verifyUser, async (req, res) => {
    try {
        const data = await ShippingDetails.findAll({ where: { userId: req.params.id } });
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error)
    }
})

route.delete("/deleteShippingDetails/:id", auth.verifyUser, async (req, res) => {
    try {
        const data = await ShippingDetails.findOne({ where: { id: req.params.id } })
        if (data !== null) {
            await ShippingDetails.destroy({ where: { id: req.params.id } });
            res.status(200).send("Successfully Deleted")
        } else {
            res.status(200).send("Invalid Command")
        }
    } catch (error) {
        res.status(500).send(error)

    }
})




module.exports = route;