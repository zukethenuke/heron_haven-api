const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

var sequelize;
if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        host: process.env.HOST,
        port: process.env.PORT,
        logging: true
    });
} else {
    sequelize = new Sequelize(
        config.db.database,
        config.db.user,
        config.db.password,
        config.db.options
    );
};

fs
    .readdirSync(__dirname)
    .filter(file => file !== 'index.js')
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
