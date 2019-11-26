const config = {
    database: { //database connection info
        host: 'clusterdfsromarin-jna6x.mongodb.net',
        port: '',
        name: 'nodeapp',
    },
    winston_options: {
        file: {
            level: "http"
        },
        console: {
            level: "debug"
        }
    }
};

module.exports = config;