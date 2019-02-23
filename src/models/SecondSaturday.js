module.exports = (sequelize, DataTypes) => {
    const secondSaturday = sequelize.define('SecondSaturday', {
        fieldname: DataTypes.STRING,
        originalname: DataTypes.STRING,
        filename: DataTypes.STRING,
        path: DataTypes.STRING,
        mimetype: DataTypes.STRING,
        destination: DataTypes.STRING,
        encoding: DataTypes.STRING,
        size: DataTypes.INTEGER
    });

    return secondSaturday;
};
