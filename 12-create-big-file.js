// const { createReadStream } = require('fs');

// const stream  = createReadStream('./content/big-data.txt');

// stream.on('data', (chunks) => {
//     console.log(chunks);
// })


const { createReadStream } = require('fs');

const stream  = createReadStream('./content/big-data.txt', {
    highWaterMark: 90000, // this decides the first and other chunk's size.
    encoding: 'utf8'
});

stream.on('data', (chunks) => {
    console.log(chunks);
})

stream.on('error', (err) => {
    console.log(err);
})