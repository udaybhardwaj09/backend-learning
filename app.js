const names = require('./names');
const sayHi = require('./globals');
console.log(names);


sayHi('susan');
sayHi(names.john);
sayHi(names.peter);