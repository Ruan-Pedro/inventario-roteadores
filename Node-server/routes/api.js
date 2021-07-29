const express = require('express')
const bodyParser = require('body-parser')
const register = require('../controllers/register')
const router = express.Router()


const option = {
    origin:"http://localhost:4200"
}

router.use((req,res, next)=>{
    console.log("middleware")
    next()
})

router.get('/all', (req,res)=>{
    // res.status(200).json(register.getAll())
    db_operations.getRouters().then(result =>{
        res.status(200).json(result)
    })
})

router.get('/all/:id', (req,res)=>{
    // res.status(200).json(register.getAll())
    db_operations.getRouter(req.params.id).then(result =>{
        res.json(result)
    })
})

router.post('/insert-router', (req,res)=>{
    // res.status(200).json(register.getAll())
    let routerModel = {...req.body}
    db_operations.insertRouter(routerModel).then(result =>{
        res.status(200).json(result)
    })
})

router.delete('/delete/:id', bodyParser.json(), (req,res)=>{
    let nome = req.params.nome
    register.removeItem(nome,1)
    res.send('deletado!')
})
router.post('/new', bodyParser.json(),(req,res)=>{
    let nome = req.body.name
    let garantia = req.body.garantia
    let suporte = req.body.suporte
    let fabricante = req.body.fabricante
    register.registerItem(nome,garantia,fabricante,suporte)
    res.status(200).send('funcionou')
})




module.exports = router
 