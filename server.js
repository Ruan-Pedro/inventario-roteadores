const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api')

const app = express()
const PORT = 5050

app.use('/api',apiRoutes)
app.use('/',express.static(path.join(__dirname, "client")))
app.use('/management',express.static(path.join(__dirname, "public")))

// app.get('/', (req,res)=>{
// res.send(express.static(path.join(__dirname + "client")))
// })


// app.get('/', (req,res)=>{
//     res.send('funcionou amigão')
// })
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
