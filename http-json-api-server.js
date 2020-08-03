const http = require('http');
const url =  require('url');

http.createServer(
    (request, response) =>{
        if(request.method === 'GET')
        {
            let json = {};
            let api_url = url.parse(request.url, true);
            let date = new Date(api_url.search.split("=")[1]);

            response.writeHead(200, { 'Content-Type': 'application/json' });
            if(api_url.pathname === '/api/unixtime')
            {
                json['unixtime'] = date.getTime();
            }
            if(api_url.pathname === '/api/parsetime')
            {
                json['hour'] = date.getHours();
                json['minute'] = date.getMinutes();
                json['second'] = date.getSeconds();
            }
            response.end(JSON.stringify(json));
        }
    }
).listen(Number(process.argv[2]));