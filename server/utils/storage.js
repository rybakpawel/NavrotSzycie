const path = require('path');
const crypto = require('crypto');
const { GridFsStorage } = require('multer-gridfs-storage');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const DB_CONNECT = process.env.DB_CONNECT;

const storage = new GridFsStorage({
    url: DB_CONNECT,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
            if (err) {
                return reject(err);
            }
            const filename = buf.toString('hex') + path.extname(file.originalname);
            const fileInfo = {
                filename: filename,
                bucketName: 'images'
            };
            resolve(fileInfo);
            });
        });
    }
});

module.exports.storage = storage;