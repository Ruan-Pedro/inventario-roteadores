const bcrypt = require('bcryptjs')

const password = "SENHA123XD"

const dbSavedPassword = "$2a$15$aUl/BoBQ1bOoS.UXgyVZPutm7eIDvxGyHIS4p.DfvmGs7EL1aGlAu"
// const salt = bcrypt.genSaltSync(15)

// const cryptPassword = bcrypt.hashSync(password, salt)
console.log(bcrypt.compareSync(password, dbSavedPassword)
)