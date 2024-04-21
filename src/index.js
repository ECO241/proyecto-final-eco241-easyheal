// Importación de los módulos necesarios
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Definir rutas
const routerFarmacos = require('./router/farmacosRouter')
//const routerFormulas = require('')
//const routerUsuariosMedicos = require('')
//const routerUsuariosDefault = require('')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Enrutamientos, terminar los tres que faltan

app.use('/Farmacos', routerFarmacos);



// Exportar el modulo
module.exports = app;




