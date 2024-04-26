const express = require("express");
const routerFarmacos = express.Router();
const esquemaMedicamento = require('../schemas/drugZod');
const path = require('path');

routerFarmacos.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../pages/farmacos.html'));
    })

module.exports = routerFarmacos