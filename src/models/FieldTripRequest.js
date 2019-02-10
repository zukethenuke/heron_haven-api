module.exports = (sequelize, DataTypes) => {
    const fieldTripRequest = sequelize.define('FieldTripRequest', {
        personInCharge: DataTypes.STRING,
        email: DataTypes.STRING,
        workPhone: DataTypes.STRING,
        personalPhone: DataTypes.STRING,
        assistant: DataTypes.STRING,
        groupName: DataTypes.STRING,
        dateOfVisit: DataTypes.DATEONLY,
        startTime: DataTypes.STRING,
        endTime: DataTypes.STRING,
        numberAttending: DataTypes.INTEGER,
        groupAges: DataTypes.STRING,
        requestedActivity: DataTypes.STRING,
        additionalInfo: DataTypes.TEXT,
        beenRead: DataTypes.BOOLEAN,
        archived: DataTypes.BOOLEAN,
        deleted: DataTypes.BOOLEAN,
        stared: DataTypes.BOOLEAN,
        visited: DataTypes.BOOLEAN,
        notes: DataTypes.TEXT
    });

    return fieldTripRequest;
};
