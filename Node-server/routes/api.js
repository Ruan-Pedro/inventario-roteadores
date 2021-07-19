const express = require('express')
const bodyParser = require('body-parser')
const register = require('../controllers/register')
const router = express.Router()

router.get('/all', (req,res)=>{
    res.json(JSON.stringify(register.getAll()))
    
})
router.post('/delete', bodyParser.json(), (req,res)=>{
    let nome = req.body.nome
    register.removeItem(nome,1)
    res.send('deletado!')
})
router.post('/new', bodyParser.json(),(req,res)=>{
    let nome = req.body.nome
    let garantia = req.body.garantia
    let suporte = req.body.suporte
    let fabricante = req.body.fabricante
    register.registerItem(nome,garantia,suporte,fabricante)
    res.send('funcionou')
})

module.exports = router
 