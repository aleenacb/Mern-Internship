const express = require('express')
const cors = require('cors')
const dbconnection = require('./config/db')

const app = express()

app.use(cors())
app.use(express.json())

dbconnection()

// test route
app.get('/apitest',(req,res)=>{
    res.send('API is working fine')
})

// user routes
app.use('/user', require('./routes/userRoutes'))

app.listen(7000,()=>{
    console.log("Server running on port 7000")
})
