const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

// system's runtime in seconds
console.log(os.uptime());

//other built-in methods for OS module
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);