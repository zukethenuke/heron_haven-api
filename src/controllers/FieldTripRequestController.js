const { FieldTripRequest } = require('../models');

module.exports = {
    async post(req, res) {
        try {
            const fieldTripRequest = await FieldTripRequest.create(req.body);
            res.send(fieldTripRequest);
        } catch (error) {
            res.status(500).send({
                error: 'An error occured submitting your field trip request'
            });
        }
    },

    async getAll(req, res) {
        try {
            const allFieldTripRequests = await FieldTripRequest.findAll();
            res.send(allFieldTripRequests);
        } catch (error) {
            res.status(500).send({
                error: 'An error occured while getting the field trip requests'
            });
        }
    }
};
