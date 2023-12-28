const express = require('express');
const appUtil = require('./utils/appUtils');

const app = express();

appUtil.
    startApp(app);
appUtil.
    setViewEngine(app, 'ejs');
appUtil.
    setMiddleware(app);
appUtil.
    manageRoutes(app);
