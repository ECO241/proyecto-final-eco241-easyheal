const express = require("express");
const routerPacientes = express.Router();
const esquemaUsuario = require('../schemas/userZod');
const path = require('path');

routerPacientes.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../pages/recibidorpac.html'));
    })

module.exports = routerPacientes