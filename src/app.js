const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// app.options('*', cors()); 

require('./routes')(app);

sequelize.sync() // { force: true } to drop all tables in db
    .then(() => {
        app.listen(config.port || 8081);
        console.log(`Server started on port ${config.port}`);
    });

app.use((error, req, res, next) => {
    if (error.code === 'LIMIT_FILE_TYPES') {
        res.status(422).send({ error: 'File type not allowed' });
    }
    if (error.code === 'LIMIT_FILE_SIZE') {
        res.status(422).send({ error: 'File is too big' });
    }
});
