const path = require('path');

console.log(path.sep);

//gives path at once
const filePath = path.join('content', 'subcontent', 'test.txt');
console.log(filePath);

//gives the base(last) file
const base = path.basename(filePath);
console.log(base);

//gives u the absolute path in the pc
const absolute = path.resolve(__dirname, 'content', 'subcontent', 'test.txt');
console.log(absolute);