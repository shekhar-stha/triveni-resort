const route = require("express").Router()
const auth = require('../middleware/auth')
const Product = require('../models/ProductModel')
const upload = require('../middleware/fileUpload')


route.post('/addProduct', upload.single('img'), auth.verifyAdmin, async (req, res) => {
    try {
        const data = await Product.create({ ...req.body, img: [req.file.filename], price: Number(req.body.price), discount: Number(req.body.discount) })
        res.status(200).send(data.dataValues)
    } catch (error) {
        res.status(500).send(error)
    }
})

route.get('/getProduct', auth.verifyUser, async (req, res) => {
    try {
        const data = Product.findAll()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error)
    }
})



module.exports = route; 