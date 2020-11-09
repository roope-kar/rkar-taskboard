const http = require('http');
const fs = require('fs');
const path = require('path');
const staticPath = path.resolve(__filename, '..', 'static');
const indexPath = path.resolve(__filename, '..', 'static', 'index.html');
const [ port ] = process.argv.slice(2);

http.createServer(async (req, res) => {

    const { pathname } = new URL(req.url);
    
    try {
        res.writeHead(200, 'OK');
        res.write(await fs.readFile(path.resolve(staticPath, pathname)));
        res.end();
    } catch(e) {
        res.writeHead(404, 'Not Found :P');
        res.write(await fs.readFile(indexPath));
        res.end();
    }

}).listen(port, error => {
    if(error) {
        console.error(error);
    } else {
        console.log(`Server running at localhost:${port}`);
    }
});
