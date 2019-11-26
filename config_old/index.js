require('dotenv').config();

var config;

try {
    config = require("./local_config");
} catch (e) {
    config = require("./default_config")[process.env.NODE_ENVIRONMENT || "development"];
}

console.log(config);

module.exports = config;