import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const app = express();

import routerFarmacos from './routes/farmacosRouter.js';
import routerFormulas from './routes/formulasRouter.js';
import routerMedicos from './routes/medicosRouter.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const __dirname = dirname(fileURLToPath(import.meta.url));

// Configurar el directorio de archivos estáticos
const staticPath = path.join(__dirname, '..', 'src', 'frontend_medico');
app.use(express.static(staticPath));

// Ruta para servir el archivo HTML
app.get('/farmacoss', (req, res) => {
  res.sendFile(path.join(staticPath, 'screens', 'farmacos.html'));
});

app.get('/medicoss', (req, res) => {
  res.sendFile(path.join(staticPath, 'screens', 'pacientes.html'));
});

// Ruta dinámica para pacientes
app.get('/medicoss/:nombre', (req, res) => {
  res.sendFile(path.join(staticPath, 'screens', 'paciente_detalle.html'));
});




// Enrutamientos
app.use('/Farmacos', routerFarmacos);
app.use('/Formulas', routerFormulas);
app.use('/Medicos', routerMedicos);

const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});