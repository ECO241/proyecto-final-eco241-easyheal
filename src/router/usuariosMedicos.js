const express = require("express");
const routerMedicos = express.Router();
const esquemaUsuario = require('../schemas/userZod');
const path = require('path');

routerMedicos.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../pages/mensajesdoc.html'));
    })

module.exports = routerMedicos