import express from "express";
const routerFormulas = express.Router();
import formulasController from '../controllers/formulasController';

// Ruta para crear una nueva fórmula
routerFormulas.post('/crear', formulasController.crearFormula);

// Otras rutas para las fórmulas...

export {routerFormulas};





