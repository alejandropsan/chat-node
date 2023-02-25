'use strict'

// REQUIRES
const express = require('express');
const bodyparser = require('body-parser');
const helmet = require('helmet');
const cors = require('./middlewares/cors');
const logs = require('./middlewares/logs');
const cspConfig = require('./middlewares/csp-config');

// SE EJECUTA EXPRESS
const app = express();

// CARGAR ARCHIVOS DE RUTAS


// MIDDLEWARES
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// CORS
app.use(cors);

// SEGURIDAD
app.use(helmet.contentSecurityPolicy(cspConfig));

// LOGS DEL SERVIDOR
app.use(logs);

// REESCRIBIR RUTAS

// EXPORTAR EL MÓDULO
module.exports = app;