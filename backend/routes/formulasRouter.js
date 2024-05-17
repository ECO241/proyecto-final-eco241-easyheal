import express from "express";
const routerFormulas = express.Router();

// Importar el controlador para formulas
import formulasController from "../controllers/formulasController.js";

// Traer todas las formulas
routerFormulas.get('/', formulasController.getAllformulas);

// Traer formula por ID
routerFormulas.get('/', formulasController.getFormulaById)

// Crear una formula
routerFormulas.post('/', formulasController.createFormula);


export default routerFormulas;





