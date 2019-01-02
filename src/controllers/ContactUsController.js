const { ContactUs } = require('../models');

module.exports = {
    async post(req, res) {
        try {
            const contactUs = await ContactUs.create(req.body);
            res.send(contactUs);
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured submitting your contact form'
            });
        }
    }
};
