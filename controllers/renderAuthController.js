function renderAboutPage(req, res) {
    res.render('auth/about', {title: "MemeHub"});
}

function renderSignupPage(req, res) {
    res.render('auth/signup', {title: "Signup"});
}

function renderLoginPage(req, res) {
    res.render('auth/login', {title: 'Login'});
}

module.exports = {
    renderAboutPage,
    renderSignupPage,
    renderLoginPage
};