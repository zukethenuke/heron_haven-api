const { SecondSaturday } = require('../models');

module.exports = {
    async post(req, res) {
        console.log('**** ss ****', req.file);
        try {
            const secondSaturday = await SecondSaturday.create(req.file);
            res.send(secondSaturday);
        } catch (error) {
            res.status(500).send({
                error: 'An error occured while updating the 2nd Saturday flyer.'
            });
        }
    }
};
