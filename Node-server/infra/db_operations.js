const config = require('./DB-connection')
const sql = require('mssql')
const routerModel = require('../models/routerModel')


async function getRouters(){
    try{
        let pool = await sql.connect(config)
        let routers = await pool.request().query("SELECT * FROM roteadores_cad")
        return routers.recordsets
    }catch(error){
        console.log(error)
    }
}

async function getRouter(routerID){
    try{
        let pool = await sql.connect(config)
        let router = await pool.request()
        .input('input_parameter', sql.Int, routerID)
        .query("select * from roteadores_cad where id_roteador = @input_parameter");
    return router.recordsets
    }
    catch(error){
        console.log(error)
    }
}
module.exports = {
    getRouters:getRouters,
    getRouter:getRouter
}