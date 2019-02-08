const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllPolicy = require('./policies/AuthenticationControllPolicy');
const UsersController = require('./controllers/UsersController');
const ContactUsController = require('./controllers/ContactUsController');
const FieldTripRequestController = require('./controllers/FieldTripRequestController');

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

    app.post('/field_trip_request',
        FieldTripRequestController.post
    );

    // app.get('/field_trip_request',
    //     FieldTripRequestController.get
    // );

    // app.put('/field_trip_request/:id',
    //     FieldTripRequestController.put
    // );
};
