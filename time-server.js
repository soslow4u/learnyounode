const net = require('net');
//const strftime = require('strftime'); I can't

fillzero = (n)=>n<10?'0'+n:n;

net.createServer(
    (socket)=>{
        var date = new Date();
        socket.end(
            date.getFullYear()+'-'+
            fillzero(date.getMonth()+1)+'-'+
            fillzero(date.getDate())+' '+
            fillzero(date.getHours())+':'+
            fillzero(date.getMinutes())+'\n'
        );
    }
).listen(Number(process.argv[2]));