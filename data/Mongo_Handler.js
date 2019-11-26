var config = require('config');
var MongoClient = require('mongodb').MongoClient;

const db_host = config.get('database.host');
const db_port = config.get('database.port');
const db_user = config.get("database.user");
const db_password = config.get("database.password");

const db_url = `mongodb+srv://${db_user}:${db_password}@${db_host}` + (db_port ? `:${db_host}/` : "") + "/";

const client = new MongoClient(db_url);

function insert (client, db_Name, collection, element) {
    client.connect(function (err, client){
        assert.equal(null, err);

        const db = client.db(dbName);

        db.collection(collection).insertOne(element);

        client.close();
    });
}

module.export = {

}