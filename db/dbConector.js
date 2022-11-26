const { MongoClient } = require("mongodb");
const appConfig =  require("../config");

var clientMongo = new MongoClient(appConfig.connectionString);
let promiseConnect = clientMongo.connect();

promiseConnect.then(function (client) {
    clientMongo= client;
    console.log("conected to MongoDB service");
}).catch(function (err) {
    console.log(err);
    console.log("Error conecting to MongoDB service");
});

module.exports=clientMongo;

