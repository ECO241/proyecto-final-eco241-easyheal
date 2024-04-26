const express = require("express");
const routerFarmacos = express.Router();


routerFarmacos.route('/')
    .get((req, res) => {
        res.send("Hola esta es la seccion de medicamentos")
    })

module.exports = routerFarmacos