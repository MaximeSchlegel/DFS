var path = require('app-root-path');

const config = {
    server: { // server info
        port: "8080"
    },
    database: { //database connection info
        host: 'localhost',
        port: '27017',
        name: 'default',
        user: 'user',
        password: 'password',
    },
    winston_option: {
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
        }
    }
};

module.exports = config;