'strict mode'
const fs = require('fs');
fs.readdir(process.argv[2],(e,d)=>{
    if(!e)
    {
        d = d.filter(item => item.endsWith("."+process.argv[3]));
        d.map(item =>console.log(item));
    }
});

