const AuthenticationController = require('./controllers/AuthenticationController');

const AuthenticationControllPolicy = require('./policies/AuthenticationControllPolicy');

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllPolicy.register,
        AuthenticationController.register
    );

    app.post('/login',
        AuthenticationController.login
    );
};
