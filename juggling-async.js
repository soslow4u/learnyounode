const http = require('http');

let count = 0;
let results = ['', '', ''];

callback = function(id){
    return (r)=>{ 
        r.setEncoding('utf-8');
        r.on('data', (data)=>results[id]+=data.toString());
        r.on('end', ()=>{
            count++;
            if(count >= 3)
                results.map((val)=>console.log(val));
        });
    }
};

for (let index = 0; index < 3; index++) {
    http.get(process.argv[index+2], callback(index));
}

