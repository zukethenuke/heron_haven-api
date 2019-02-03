const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt'));

function hashpassword (user, options) {
    const SALT_FACTOR = 8;
    console.log('hashing');
    if (!user.changed('password')) {
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => {
            console.log('salt', salt);
            return bcrypt.hashSync(user.password, salt, null);
        })
        .then(hash => {
            console.log('hash', hash);
            user.setDataValue('password', hash);
        });
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipCode: DataTypes.STRING,
        volunteer: DataTypes.BOOLEAN,
        admin: DataTypes.BOOLEAN,
        superUser: DataTypes.BOOLEAN,
        notes: DataTypes.TEXT
    }, {
        hooks: {
            beforeSave: hashpassword
        }
    });

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password);
    };

    return User;
};
