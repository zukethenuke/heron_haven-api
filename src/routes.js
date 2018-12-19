const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllPolicy = require('./policies/AuthenticationControllPolicy');
const UsersController = require('./controllers/UsersController');

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllPolicy.register,
        AuthenticationController.register
    );

    app.post('/login',
        AuthenticationController.login
    );

    app.get('/users',
        UsersController.getAllUsers)
};
