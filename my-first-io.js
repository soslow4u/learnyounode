const fs = require('fs');
let fileBuffer = fs.readFileSync(process.argv[2]);
let fileContents = fileBuffer.toString().split('\n');
console.log(fileContents.length-1);