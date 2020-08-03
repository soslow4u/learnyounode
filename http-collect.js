var http = require('http');

http.get(process.argv[2], (r) => {
        r.setEncoding('utf8');
        r.on('data', accumulate);
        r.on('end',()=>{ console.log(accum.length); console.log(accum);});
    }
);

let accum = '';
accumulate = function(data) {
    accum += data;
};