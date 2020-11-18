const http = require('http');
const fs = require('fs');
const path = require('path');
const util = require('util');
const url = require('url');
const [ port ] = process.argv.slice(2);

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.gz': 'text/javascript',
    '.br': 'text/javascript'
};

const server = http.createServer(async (req, res) => {
    const { pathname } = url.parse(req.url);
    try {
        const filePath = path.resolve(__dirname, '..', 'static') + pathname;
        const fileExtension = path.extname(filePath);
        const fileContent = await util.promisify(fs.readFile)(filePath);
        res.setHeader("Status", 200);
        res.setHeader("Content-Type", mimeTypes[fileExtension]);
        if(fileExtension === '.gz') {
            res.setHeader("Content-Encoding", "gzip");
        } else if(fileExtension === '.br') {
            res.setHeader("Content-Encoding", "br");
        }
        res.end(fileContent);
    } catch(e) {
        const filePath = path.resolve(__dirname, '..', 'static', 'index.html');
        const fileContent = await util.promisify(fs.readFile)(filePath);
        res.setHeader("Status", 200);
        res.setHeader("Content-Type", mimeTypes[path.extname(filePath)]);
        res.end(fileContent);
    }
});

server.listen(port, error => {
    if(error) {
        console.error(error);
    } else {
        console.log(`Server running at localhost:${port}`);
    }
});
