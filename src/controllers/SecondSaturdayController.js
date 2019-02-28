const { SecondSaturday } = require('../models');
const multer = require('multer');

module.exports = {
    async post(req, res) {
        try {
            console.log('file', req.file);
            console.log('blob', req.blob);
            const secondSaturday = await SecondSaturday.create(req.file);
            res.send(secondSaturday);
        } catch (error) {
            res.status(500).send({
                error: 'An error occured while updating the 2nd Saturday flyer.'
            });
        }
    },

    upload() {
        return multer({
            dest: './uploads/2ndSaturday/flyer',
            fileFilter,
            limits: {
                fileSize: 2500000
            }
        }).single('file');
    },

    // blob() {
    //     return multer().single('document');
    // }

    async get(req, res) {
        try {
            const secondSaturday = await SecondSaturday.findAll({
                limit: 1,
                order: [['createdAt', 'DESC']]
            });
            let filePath = secondSaturday[0].dataValues.path;
            res.download(filePath);
        } catch (error) {
            res.status(500).send({
                error: 'An error occured while getting the 2nd Saturday Flyer'
            });
        }
    }
};

function fileFilter(res, file, callback) {
    const allowedFileTypes = ['application/pdf'];

    if (!allowedFileTypes.includes(file.mimetype)) {
        let error = new Error('File type not allowed');
        console.log('** fileFilter **', error);
        error.code = 'LIMIT_FILE_TYPES';
        return callback(error, false);
    }

    callback(null, true);
};
