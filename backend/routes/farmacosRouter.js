const express = require("express");
const routerFarmacos = express.Router();
const farmacosController = require('../Handlers/farmacoscontroller');

// Ruta para reducir el inventario de fármacos
routerFarmacos.post('/reducir-inventario', farmacosController.reducirInventario);

// Otras rutas para los fármacos...


module.exports = routerFarmacos