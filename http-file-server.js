const http = require('http');
const fs = require('fs');
//const strftime = require('strftime'); I can't

fillzero = (n)=>n<10?'0'+n:n;

http.createServer(
    (request, response) =>{
        fs.createReadStream(process.argv[3]).pipe(response);
    }
).listen(Number(process.argv[2]));