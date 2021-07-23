module.exports = {

    roteadores:[
        {
            id:generateID(),
            nome:"router1",
            garantia:"SIM",
            fabricante:" cisco", 
            suporte:"6 meses",
            justificativa:""
        },
        {
            id:generateID(),
            nome:"TP-LINK",
            garantia:"NÃO",
            fabricante:" IBM", 
            suporte:"7 meses",
            justificativa:""
        },
        {
            id:generateID(),
            nome:"LINK-ROUTER",
            garantia:"SIM",
            fabricante:" MICROSOFT", 
            suporte:"3 ANOS",
            justificativa:""
        },
        {
            id:generateID(),
            nome:"NET PROVIDER",
            garantia:"NÃO",
            fabricante:" APPLE", 
            suporte:"6 SEMESTRES",
            justificativa:""
        }
    ],
     getAll(){
        return this.roteadores
     },


     removeItem(index,quantity){
        this.roteadores.splice(index,quantity)
     },


    registerItem( nome, garantia, fabricante, suporte ){
        this.roteadores.push({id:generateID(), nome, garantia, fabricante, suporte})
        console.log('ok')
    }

}

function generateID(){
    return Math.random().toString(36).substr(2,9)
}
// function sendDate(dia, mes, ano){
//     return new Date(dia, mes, ano)
// }