const { User } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    console.log('****', jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    }));

    return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: ONE_WEEK });
}

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body);
            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });
        } catch (error) {
            res.status(400).send({
                error: 'Email address is already being used'
            });
        }
    },
    async login (req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                where: {
                    email
                }
            });
            const isPasswordValid = user ? await user.comparePassword(password) : false;

            if (!user || !isPasswordValid) {
                return res.status(403).send({
                    error: 'Invalid login information'
                });
            }

            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured trying to login'
            });
        }
    }
};
