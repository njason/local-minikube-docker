const http = require('http');
const qs = require('querystring');
const url = require('url');

const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {

    if(req.method !== 'GET') handleError(res, 405)
    
    const {pathname, query} = url.parse(req.url);

    if(pathname === '/shutdown') {
        console.log('shutdown endpoint');
        res.statusCode = 200;
        res.end();
        shutdown();
    }
    else if(pathname === '/healthy') {
        console.log('health endpoint');
        res.statusCode = 200;
        res.write('ok');
        res.end();
    }

    handleError(res, 404);
        
});

function shutdown() {
    server.close();
}

function handleError(res, code) {
    res.statusCode = code;
    res.end(`{"error": "${http.STATUS_CODES[code]}"}`);
}

server.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
})

process.on('SIGTERM', () => {
    console.log(`${process.env.MYID} Received shutdown signal`);
    server.close();
});
