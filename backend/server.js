import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const app = express();

import routerFarmacos from './routes/farmacosRouter.js';
import routerFormulas from './routes/formulasRouter.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const __dirname = dirname(fileURLToPath(import.meta.url));

// Configurar el directorio de archivos estáticos
// Cambia la ruta a una fuera del directorio `backend`
const staticPath = path.join(__dirname, '..', 'src','frontend_medico');
app.use(express.static(staticPath));

// Ruta para servir el archivo HTML
app.get('/farmacoss', (req, res) => {
  res.sendFile(path.join(staticPath,  'screens', 'farmacos.html'));
});

// Enrutamientos
app.use('/Farmacos', routerFarmacos);
app.use('/Formulas', routerFormulas);

const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
