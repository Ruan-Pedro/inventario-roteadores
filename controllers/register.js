module.exports = {

    roteadores:[
        {
            id:generateID(),
            nome:"router1",
            garantia:"SIM",
            fabricante:" cisco", 
            suporte:"6 meses",
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
    }

}

function generateID(){
    return Math.random().toString(36).substr(2,9)
}
// function sendDate(dia, mes, ano){
//     return new Date(dia, mes, ano)
// }