const{MongoClient} = require('mongodb');
const uri = 'mongodb+srv://jsyoo1229:<password>@cluster0.9uogdx4.mongodb.net/test';

module.exports = function(callback){
    return MongoClient.connect(uri, callback);
}
