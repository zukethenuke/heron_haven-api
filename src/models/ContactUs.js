module.exports = (sequelize, DataTypes) => {
    const contactUs = sequelize.define('ContactUs', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        selectedOption: DataTypes.STRING,
        message: DataTypes.TEXT,
        type: DataTypes.STRING
    });

    return contactUs;
};
