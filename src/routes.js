const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllPolicy = require('./policies/AuthenticationControllPolicy');
const UsersController = require('./controllers/UsersController');
const ContactUsController = require('./controllers/ContactUsController');

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllPolicy.register,
        AuthenticationController.register
    );

    app.post('/login',
        AuthenticationController.login
    );

    app.get('/users',
        UsersController.getAllUsers
    );

    app.post('/contact_us',
        ContactUsController.post
    );

    app.get('/contact_us',
        ContactUsController.getAllContactUsMessages
    );

    app.put('/contact_us/:id',
        ContactUsController.put
    );
};
