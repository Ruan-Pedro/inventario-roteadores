const bcrypt = require('bcryptjs')

const password = "MINHA SENHA!"

const salt = bcrypt.genSaltSync(16)

const dbSavedPass = "$2a$16$TZ1Vx/V1SSJ2iECzNjOZiOe78W46LS5GjjjZ83YOjK1WXiTqr2mHu"

console.log(bcrypt.compareSync(password, dbSavedPass))
