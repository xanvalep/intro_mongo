//load db dependencies 
let dbUser= require("../db/entities/dbUser");
// start router
let router = require("express").Router();

//para obtener un usuario 
router.get("/", function(req, res){  
    res.send("hello word usuarios")
});

// para obtener todos los usuarios 

router.get("/all",async function(req, res){  

    let result = await dbUser.getAllUser();
    res.json(result);
    //res.send("hello word usuarios all");
});



module.exports = router;


 /*

*/