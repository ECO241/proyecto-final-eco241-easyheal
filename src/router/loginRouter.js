const express = require("express");
const routerLogin = express.Router();
const esquemaLogin = require('../schemas/loginZod');
const path = require('path');

routerLogin.use(express.json());

routerLogin.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../pages/login.html'));
    })

module.exports = routerLogin