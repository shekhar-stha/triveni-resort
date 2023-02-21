const route = require("express").Router()
const Notice = require("../models/NoticeModel")
const auth = require("../middleware/auth")

route.post('/addNotice', auth.verifyAdmin, async (req, res) => {
    try {
        const data = Notice.build({...req.body})
        await data.save()
        res.status(200).send(data.dataValues)
    } catch (error) {
        res.status(500).send(error)
    }
})



route.get("/getNotice", auth.verifyUser, async(req,res)=>{
    try {
        const data = await Notice.findAll();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

route.get("/getNotice/:id", auth.verifyUser, async (req, res) => {
    try {
        const data = await Notice.findAll({ where: { id: req.params.id } });
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error)
    }
})

route.delete("/deleteNotice/:id", auth.verifyAdmin, async (req, res) => {
    try {
        const data = await Notice.findOne({ where: { id: req.params.id } })
        if (data !== null) {
            await Notice.destroy({ where: { id: req.params.id } });
            res.status(200).send("Successfully Deleted")
        } else {
            res.status(200).send("Invalid Command")
        }
    } catch (error) {
        res.status(500).send(error)

    }
})

route.put('/updateNotice/:id', auth.verifyAdmin, async (req, res) => {
    try {
        const data = await Notice.findOne({ where: { id: req.params.id } })
        if (data !== null) {
            await Notice.update(req.body, { where: { id: req.params.id } })
            res.status(200).send("successfully updated")
        } else {
            res.status(200).send("Invalid Command")
        }
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = route