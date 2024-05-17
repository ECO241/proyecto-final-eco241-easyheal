// Importación de los módulos necesarios
import express from 'express';
import cors from 'cors';
const app = express();
import bodyParser from 'body-parser';

// Importar routers
import routerFarmacos from './routes/farmacosRouter'
//import routerFormulas from './routes/formulasRouter';
//import routerMedicos from './routes/medicosRouter';
//import routerPacientes from './routes/pacientesRouter';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Enrutamientos

app.use('/Farmacos', routerFarmacos);
//app.use('/Formulas', routerFormulas);
//app.use('/Medicos', routerMedicos);
//app.use('/Pacientes', routerPacientes);


const PORT = process.env.PORT || 3000;


// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
