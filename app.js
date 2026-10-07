const _ = require('lodash');

let item = [1,[2,[3,[4]]]];
let newItem = _.flattenDeep(item);
console.log(newItem);

console.log("Hello World");