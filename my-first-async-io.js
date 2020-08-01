const fs = require('fs');
let fileBuffer = fs.readFile(process.argv[2],(e,d)=>{
    if(!e)
    {
        let fileContents = d.toString().split('\n');
        console.log(fileContents.length-1);
    }
});
