const config = require('./DB-connection')
const modal = require('../models/model')
const sql = require('mssql')

async function getOrders(){
    try{
        let pool = await sql.connect(config)
        let roteadores = await pool.request().query("select * from roteador")
        return roteadores.recordsets
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getOrders: getOrders
}