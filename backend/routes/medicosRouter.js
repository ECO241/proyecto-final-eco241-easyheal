import express from "express";
const routerMedicos = express.Router();
import medicosController from '../controllers/medicosController.js';



// Ruta para registrar un paciente
routerMedicos.post('/registrar', medicosController.registrarPaciente);

// Ruta para iniciar sesión de un paciente
routerMedicos.post('/login', medicosController.loginPaciente);




export default routerMedicos;
