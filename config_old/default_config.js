var appRoot = require('app-root-path');

database_default = {
    host: "localhost",
    port: "27017",
    user: "user",
    password: "pass",
};

config = {
    development: {
        server: { // server info
            port: process.env.SERVER_PORT || "8080"
        },
        database: database_default,
        winston_option: { // winston output stream option
            file: {
                level: 'info',
                handleExceptions: true,
                colorize: false,
                json: true,
                filename: `${appRoot}/logs/app.log`,
                maxsize: 5242880, // 5MB
                maxFiles: 5,
            },
            console: {
                level: 'debug',
                handleExceptions: true,
                colorize: true,
                json: false,
            },
        }
    },

    test: {
        database: database_default,
    },

    production:{
        database: database_default,
    }

};

module.exports = config;