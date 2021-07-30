const express = require('express')
const path = require('path')
//  const fs = require('fs')
//  const bodyParser = require('body-parser')
const sql = require('mssql')
const config = require('./infra/DB-connection')

const apiRoutes = require('./routes/api')
const cors = require('cors')
const routerModel = require('./models/routerModel')
const app = express()
const PORT = 5050

const db_operations = require('./infra/db_operations')



const option = {
    origin:"http://localhost:4200"
}
sql.connect(config)
// db_operations.getOrders().then(result =>{
//     console.log(result)
    
// })


app.use(cors(option))

app.use('/',express.static(path.join(__dirname, "client")))
app.use('/api',apiRoutes)
app.use('/database', express.static(path.join(__dirname, "public/database.html")))
app.use('/dashboard', express.static(path.join(__dirname, "public/dashboard.html")))
app.use('/management',express.static(path.join(__dirname, "public/management.html")))

// app.get('/', (req,res)=>{
// res.send(express.static(path.join(__dirname + "client")))
// })


// app.get('/', (req,res)=>{
//     res.send('funcionou amigão')
// })
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
