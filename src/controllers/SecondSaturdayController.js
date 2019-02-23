const { SecondSaturday } = require('../models');
const multer = require('multer');

module.exports = {
    async post(req, res) {
        try {
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
            fileFilter
        }).single('file');
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
