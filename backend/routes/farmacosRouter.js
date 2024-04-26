const express = require("express");
const routerFarmacos = express.Router();
const farmacosController = require('../controllers/farmacosController');

// Ruta para reducir el inventario de fármacos
routerFarmacos.post('/reducir-inventario', farmacosController.reducirInventario);

// Otras rutas para los fármacos...


module.exports = routerFarmacos