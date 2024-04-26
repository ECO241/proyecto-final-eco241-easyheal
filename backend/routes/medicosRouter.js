const express = require("express");
const routerMedicos = express.Router();
const medicosController = require('../Handlers/medicosController');


// Ruta para registrar un paciente
routerMedicos.post('/registrar', medicosController.registrarPaciente);

// Ruta para iniciar sesión de un paciente
routerMedicos.post('/login', medicosController.loginPaciente);



module.exports = routerMedicos