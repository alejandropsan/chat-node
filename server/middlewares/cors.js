'use strict'

const cors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', ['http://192.168.100.10:6677', 'http://localhost:6677', 'http://192.168.100.15:6677']);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
};

module.exports = cors;