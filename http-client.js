var http = require('http');
http.get(process.argv[2], (r) => {
        r.setEncoding('utf8');
        r.on('data', console.log);
    }
);