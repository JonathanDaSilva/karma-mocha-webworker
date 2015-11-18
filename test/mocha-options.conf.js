'use strict';

const path = require('path');

module.exports = config => {
        config.set({
                basePath   : path.resolve(__dirname, '..'),
                frameworks : ['mocha-webworker'],

                files      : [
                        {pattern: 'test/mocha/tdd.js', included: false}
                ],

                client     : {
                        mochaWebWorker: {
                                mocha: {
                                        ui: 'tdd'
                                }
                        }
                },

                reporters  : ['progress'],
                port       : 9876,
                colors     : true,
                logLevel   : config.LOG_DEBUG,

                browsers   : ['Firefox', 'Chrome'],
                singleRun  : true
        });
};
