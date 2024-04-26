// Importación de los módulos necesarios
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Definir rutas
const routerFarmacos = require('./router/farmacosRouter')
const routerFormulas = require('./router/formulasRouter')
const routerMedicos = require('./router/usuariosDefaultRouter')
const routerPacientes = require('./router/usuariosDefaultRouter');
const routerLogin = require('./router/loginRouter');
const routerRegister = require('./router/registerRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Enrutamientos

app.use('/Farmacos', routerFarmacos);
app.use('/Formulas', routerFormulas);
app.use('/Medicos', routerMedicos);
app.use('/Pacientes', routerPacientes);
app.use('/Login', routerLogin);
app.use('/Register', routerRegister);

//Acá falta lo que Ana tenía y David no, hay que mirar lo que tenía para colocarlo en el router correspondiente

// Exportar el modulo
module.exports = app;




