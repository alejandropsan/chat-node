'use strict'

const logs = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
};

module.exports = logs;