var dotenv = require("dotenv");
var config = require("nconf");

// load the .env file in the environment variables
dotenv.config();

// load the args passed to the program and the environment variables into the config
config.argv().env();

//load the db config
config.file('default', { file : 'default.json' });


// Display all the var in the config
console.log(config.get('DB_HOST'));

module.exports = config;