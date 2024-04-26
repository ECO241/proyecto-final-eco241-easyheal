const express = require("express");
const routerRegister = express.Router();
const esquemaRegister = require('../schemas/registerZod');
const path = require('path');

routerRegister.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../pages/register.html'));
    })

module.exports = routerRegister