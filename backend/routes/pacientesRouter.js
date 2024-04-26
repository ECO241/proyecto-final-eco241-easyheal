const express = require("express");
const routerPacientes = express.Router();
const pacientesController = require('../Handlers/pacientesController');


// Ruta para registrar un paciente
routerPacientes.post('/registrar', pacientesController.registrarPaciente);

// Ruta para iniciar sesión de un paciente
routerPacientes.post('/login', pacientesController.loginPaciente);

module.exports = routerPacientes