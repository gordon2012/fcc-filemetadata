const express = require('express');
const multer = require('multer');
const upload = multer();
const app = express();

const page = inner => `<!doctype html>
    <html class="no-js" lang="">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>File Metadata | freeCodeCamp</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width,  initial-scale=1">
      </head>
      <body>
        <h1>File Metadata</h1>
            ${inner}
      </body>
    </html>
`;

app.get('/', (req, res) => {
    const html = page(`
        <form action="/metadata" method="post" enctype="multipart/form-data">
            <input type="file" name="upfile" />
            <input type="submit" />
        </form>
    `);
    res.send(html);
});

app.post('/metadata', upload.single('upfile'), (req, res, next) => {
    const html = page(`
        <pre>${JSON.stringify(req.file, null, 2)}</pre>
    `);

    // console.log(req);

    res.send(html);
    // res.send('meta');
});

app.listen(5000, () => {
    console.log('Server running: http://localhost:5000');
});
