var faker = require('faker');
var mongoClient = require('mongodb').MongoClient;


function fakeComment () {
    // return a fake comment
    return { pseudo: faker.internet.userName(),
        comment: faker.lorem.sentence()};
}


function populateCollection (url, dbName, collection, elementsGenerator, number) {
    const client = new mongoClient(url);


    client.connect(function(err) {
        if (err) {
            console.log(`Error connecting to: ${url}\n`);
            throw err;
        }

        console.log(`Adding ${number} element(s) to: \n=> url: ${url} \n=> db: ${dbName} \n=> collection: ${collection} \n`);

        // Access the db
        const targetDb = client.db(dbName);
        // Get the collection
        const targetCollection = targetDb.collection(collection);
        //Add the elements
        for (let i = 0; i < number ; i++) {
            targetCollection.insertOne(elementsGenerator())
        }

        //End the conection
        client.close();
        console.log("Done !");
    });


}

// require("dotenv").config_old({ path: '../.env' });
// const user = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;
// const host = process.env.DB_HOST;
// const url = `mongodb+srv://${user}:${password}@${host}`;
// populateCollection(url, "nodeapp", "comments", fakeComment, 10);

module.exports = {populateCollection};