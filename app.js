const {writeFileSync} = require('fs');

for(let i = 0; i<10000; i++){
    writeFileSync('./content/big-data.txt', `Hello there ${i}\n`, {flag : 'a'});
}