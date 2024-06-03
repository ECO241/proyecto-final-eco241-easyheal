import express from "express";
const routerMedicos = express.Router();
import medicosController from '../controllers/medicosController.js';


// Traer formula pacientes
routerMedicos.get('/', medicosController.getAllPacientes)


routerMedicos.get('/:nombre', (req, res) => {
    const paciente = pacientes.find(p => p.nombre === req.params.nombre);
    if (paciente) {
        res.json({ success: true, data: paciente });
    } else {
        res.json({ success: false, error: 'Paciente no encontrado' });
    }
});



export default routerMedicos;