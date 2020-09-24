const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')


//load express
const app = express()


// import routers
const authRoute = require('./routes/authRoute')
const eventRoute = require('./routes/eventRoute')
const adminRoute = require('./routes/adminRoute')
const ticketRoute = require('./routes/ticketRoute')
const userRoute = require('./routes/userRoute')


// load config
dotenv.config({ path: './config/config.env' })

connectDB()
// load cors
app.use(cors())
// load body parser middleware parse application/json
app.use(bodyParser.json())


const PORT = process.env.PORT 

// Load error
app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500
    const message = error.message
    const data = error.data
    res.status(status).json({message: message, data: data})
})


// load api endpoints

app.use('/api/v1/auth/', authRoute)
app.use('/api/v1/admin/', adminRoute)
app.use('/api/v1/tickets/', ticketRoute)
app.use('/api/v1/users/', userRoute)
app.use('/api/v1/events/', eventRoute)





app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
