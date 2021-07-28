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

async function insertRouter(routerValues){
    try{
        let pool = await sql.connect(config)
        let insertRouter = await pool.request()
        .input('nome', sql.NVarChar, routerValues.nome)
        .input('fabricante', sql.NVarChar, routerValues.fabricante)
        .input('garantia', sql.NVarChar, routerValues.garantia)
        .input('suporte', sql.NVarChar, routerValues.suporte)
        .input('justificativa', sql.NText, routerValues.justificativa)
        .query('insert into roteadores_cad (nome, fabricante , garantia, suporte, justificativa)values (@nome, @fabricante , @garantia, @suporte, @justificativa)')
        // .query("select * from roteadores_cad where id_roteador = @input_parameter");
    return router.recordsets
    }
    catch(error){
        console.log(error)
    }
}


module.exports = {
    getRouters:getRouters,
    getRouter:getRouter,
    insertRouter:insertRouter
}