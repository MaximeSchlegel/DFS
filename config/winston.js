var appRoot = require('app-root-path');
var winston = require('winston');


// define the custom settings for each transport (file, console)
var options = {
    /**
     * level - Level of messages to log.
     * handleExceptions - Catch and log unhandled exceptions.
     * colorize - Colorize the output. This can be helpful when looking at console logs.
     * json - Records log data in JSON format.
     * filename - The file to be used to write log data to.
     * maxsize - Max size of log file, in bytes, before a new file will be created.
     * maxFiles - Limit the number of files created when the size of the logfile is exceeded.
     */
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
};

// instantiate a new Winston Logger with the settings defined above
var logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function(message) {
        logger.info(message);
    },
};


module.exports = logger;