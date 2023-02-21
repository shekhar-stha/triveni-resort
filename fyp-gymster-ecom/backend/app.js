const express = require("express")
const cors = require("cors")
const userRoute = require("./routes/user")
const adminRoute = require("./routes/admin")
const memberRoute = require("./routes/gymMember")
const trainerRoute = require("./routes/gymTrainer")
const membershipRoute = require("./routes/memberShip")
const shippingdetailsRoute = require("./routes/shippingDetails")
const scheduleRoute = require("./routes/memeberSchedule")
const dietRoute = require("./routes/diet")
const productRoute = require("./routes/product")
const noticeRoute = require("./routes/notice")

const cookieparser = require("cookie-parser")
require("./db/conn")
require('./db/relation')


const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(cookieparser())

const PORT = process.env.PORT || 5000


app.use("/api/user", userRoute)
app.use("/api/admin", adminRoute)
app.use("/api/member", memberRoute)
app.use("/api/trainer", trainerRoute)           
app.use("/api/membership", membershipRoute)    
app.use("/api/shippingdetails", shippingdetailsRoute)  
app.use("/api/schedule", scheduleRoute)    
app.use("/api/diet", dietRoute)    
app.use("/api/product", productRoute)  
app.use("/api/notice", noticeRoute)   

app.listen(PORT, ()=>{
    console.log(`Connnection to the port ${PORT}`)
})

