import express from "express";
const routerFormulas = express.Router();
import formulasController from "../controllers/formulasController.js";

// Traer todas las formulas
routerFormulas.get('/', formulasController.getAllformulas);

// Traer formula por ID
routerFormulas.get('/:id', formulasController.getFormulaById);

// Crear una formula
routerFormulas.post('/', formulasController.createFormula);

// Traer todas las formulas de un usuario
routerFormulas.get('/paciente/:id', formulasController.getFormulasByPacienteId);

// Traer la última fórmula con QR de un usuario
routerFormulas.get('/paciente/:id/ultima', formulasController.getUltimaFormulaConQR);


export default routerFormulas;
