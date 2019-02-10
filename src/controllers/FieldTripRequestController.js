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
                message: 'An error occured while getting the field trip requests',
                error
            });
        }
    },

    async put(req, res) {
        try {
            const { id } = req.params;
            const request = await FieldTripRequest.findOne({
                where: { id }
            });
            request.update(req.body);
            res.send(request);
        } catch (error) {
            res.status(500).send({
                error: 'An error occured while updating your field trip request'
            });
        }
    }
};
