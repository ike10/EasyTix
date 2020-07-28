const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')


// load config
dotenv.config({ path: './config/config.env' })

connectDB()

//load express
const app = express()



const PORT = process.env.PORT 

app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
