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
    },

    async getAllContactUsMessages(req, res) {
        try {
            console.log('*************', ContactUs.findAll());
            const allMessages = await ContactUs.findAll();
            res.send(allMessages);
        } catch (error) {
            res.status(500).send({
                error: 'An error occured getting the messages'
            });
        }
    },

    async put(req, res) {
        try {
            console.log('********** update **************', req.body);
            const { id } = req.params;
            const contactUs = await ContactUs.findOne({
                where: { id }
            });
            console.log('found id', contactUs.id);
            contactUs.update(req.body);
            res.send(contactUs);
        } catch (error) {
            res.status(500).send({
                error: 'An error occured while updating your message'
            });
        }
    }
};
