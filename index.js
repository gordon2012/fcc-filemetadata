const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const app = express();

const origin =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://filemetadata.gordondoskas.com';

app.use(cors({ origin }));

app.post('/metadata', upload.single('upfile'), (req, res, next) => {
    res.json(req.file);
});

app.listen(5000, () => {
    console.log('Server running: http://localhost:5000');
});
