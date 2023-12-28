require("dotenv").config();

const authRouter = require('../routes/authRoutes');
const express = require('express');


const PORT = process.env.PORT || 3000;

function setViewEngine(app, viewEngineName) {
    app.set('view engine', viewEngineName);
}

function startApp(app) {
    app.listen(PORT, console.log(`App running on port ${PORT}`));
}

function setMiddleware(app) {
    app.use(express.static('public'));
}

function manageRoutes(app) {
    app.use('/', authRouter);
}

module.exports = {
    manageRoutes,
    setViewEngine,
    setMiddleware,
    startApp
};