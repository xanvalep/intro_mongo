//dependencies
let bodyParser= require("body-parser");
let express= require("express");


// load config App 
console.log("hello world!!!");
let appConfig = require("./config");

// load routers on
let usuarioRouter= require("./routes/usuariosRouter");

// start app Web and database conection 
let dbConector = require("./db/dbConector");
let app = express(); 

// registration routes
app.use("/usuarios",usuarioRouter);
// setup  test server 
app.listen(appConfig.PORT, function(m,e){
console.log( `La aplicacion esta escuchando en el puerto: ${appConfig.PORT }` );
});