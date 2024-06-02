import express from "express";
const routerMedicos = express.Router();
import medicosController from "../controllers/medicosController.js";


// Traer medicos

routerMedicos.get('/', medicosController.getAllMedicos)


export default routerMedicos;

