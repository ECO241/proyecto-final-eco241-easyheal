import express from "express";
const routerPacientes = express.Router();

import pacientesController from '../controllers/pacientesController.js';


// Traer pacientes con el pacientes controller

routerPacientes.get('/', pacientesController.getAllPacientes)


export default routerPacientes;
