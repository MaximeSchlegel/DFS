const config = {
    database: { //database connection info
        host: 'clusterdfsromarin-jna6x.mongodb.net',
        port: '',
        name: 'nodeapp-dev',
    },
    winston_options: {
        file: {
            level: "warn"
        },
        console: {
            level: "debug"
        }
    }
};

module.exports = config;