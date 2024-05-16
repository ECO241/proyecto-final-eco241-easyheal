import express from "express";
const routerFarmacos = express.Router();
import farmacosController from '../controllers/farmacoscontroller';

// Ruta para reducir el inventario de fármacos
routerFarmacos.post('/reducir-inventario', farmacosController.reducirInventario);

// Otras rutas para los fármacos...


export {routerFarmacos};