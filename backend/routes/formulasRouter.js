const express = require('express');
const routerFormulas = express.Router();
const formulasController = require('../Handlers/formulasController');

// Ruta para crear una nueva fórmula
routerFormulas.post('/crear', formulasController.crearFormula);

// Otras rutas para las fórmulas...

module.exports = routerFormulas;





