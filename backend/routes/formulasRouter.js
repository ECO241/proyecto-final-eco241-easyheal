const express = require("express");
const routerFormulas = express.Router();


routerFormulas.route('/')
    .get((req, res) => {
        res.send("Hola esta es la seccion de Formulas")
    })

module.exports = routerFormulas




