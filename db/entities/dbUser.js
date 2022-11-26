//dependencies
let appConfig = require("../../config");
let dbConnector= require("../dbConector");
// config variables
let collectionName = "usuarios"; 
// functions
// function for create user
async function createUser (user) {
    try{
        let db =  dbConnector.db(appConfig.dbName);
    let collection = db.collection(collectionName);
    let result = await collection.insertOne(usuario);
    return result
    }catch(ex) {
    console.log(ex);
    return {};
    }
  
}


// function for get all users

async function getAllUser () {
    try{
        let db =  dbConnector.db(appConfig.dbName);
    let collection = db.collection(collectionName);
    let result = [];
    let cursor = collection.find({});
    let currentUser = await cursor.next();
    while (currentUser != null){
        result.push(currentUser);
        currentUser = await cursor.next();
    }
    return result
    }catch(ex) {
    console.log(ex);
    return [];
    }
  
}



module.exports = {
    collectionName,
    createUser,
    getAllUser,
};

