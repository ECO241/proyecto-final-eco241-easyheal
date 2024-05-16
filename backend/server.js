// Importación de los módulos necesarios
import express from 'express';
import cors from 'cors';
const app = express();
import bodyParser from 'body-parser';

// Definir rutas
import routerFarmacos from './routes/farmacosRouter';
import routerFormulas from './routes/formulasRouter';
import routerMedicos from './routes/medicosRouter';
import routerPacientes from './routes/pacientesRouter';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Enrutamientos

app.use('/Farmacos', routerFarmacos);
app.use('/Formulas', routerFormulas);
app.use('/Medicos', routerMedicos);
app.use('/Pacientes', routerPacientes);


const port = 3000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
