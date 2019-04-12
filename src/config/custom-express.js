//TODO marko js
require('marko/node-require').install();
require('marko/express');

//TODO express js
const express = require('express');
const app = express();

//TODO Isolando as rotas
const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;

