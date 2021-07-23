const express = require('express')
const bodyParser = require('body-parser')
const register = require('../controllers/register')
const router = express.Router()
const cors = require('cors')

const option = {
    origin:"http://localhost:4200"
}
router.use(cors(option))


router.get('/all', (req,res)=>{
    res.status(200).json(register.getAll())
    
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
    console.log('ta')
})

module.exports = router
 