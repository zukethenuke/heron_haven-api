const { User } = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const allUsers = await User.findAll();
            res.send(allUsers);
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured getting users'
            });
        }
    }
};
