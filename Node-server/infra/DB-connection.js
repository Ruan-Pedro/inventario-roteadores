const config = {
    user:"sa",
    password: "ruan@2021",
    database:"Rotech_DB",
    server: "192.168.0.111",
    // host:"192.168.0.111",
    options:{
      //  trustedconnection:true,
        encrypt: false,
        enableArithPort: true,
       // instancename:'\MSSQL',
    }
}
module.exports = config