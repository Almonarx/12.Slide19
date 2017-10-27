const http = require('http');
const fs = require('fs');

function addDate(data) {
    const date = new Date();

    return data.replace('</body>', `<p><strong>${date.toLocaleString()}</strong></p></body>`);
}

http
    .createServer((req, res) => {
        if (/jpg|png|gif|jpeg|js/.test(req.url)) {
            fs.readFile(req.url.replace('/', ''), (err, data) => {
                if (err) {
                    res.end();
                    throw new Error('Error while reading file: ' + err);
                } else {
                    res.end(data);
                }
            });

            return;
        }

        fs.readFile('index.html', 'utf-8', (err, data) => {
            if (err) {
                res.end('<strong>Error!</strong>');
                throw new Error('Error while reading index.html');
            }

            res.end(addDate(data));
        });
    })
    .listen(3000);