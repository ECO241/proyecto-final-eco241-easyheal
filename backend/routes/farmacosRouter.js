import express from "express";
const routerFarmacos = express.Router();

// Importar controlador de farmacos

import farmacosController from "../controllers/farmacoscontroller.js";


// Traer todas los farmacos
routerFarmacos.get('/', farmacosController.getAllFarmacos);






export default routerFarmacos;