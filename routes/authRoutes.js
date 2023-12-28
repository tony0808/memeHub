const express = require('express')
const router = express.Router();
const renderAuthController = require('../controllers/renderAuthController');

router.get('/about', renderAuthController.renderAboutPage);
router.get('/signup', renderAuthController.renderSignupPage);
router.get('/login', renderAuthController.renderLoginPage);

module.exports = router;