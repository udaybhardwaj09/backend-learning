// __dirname = path of current file
//__filename = name of the current file
// require = function to use modules
// module = info about current module (file)
// process = info about env about program is being executed

console.log(process);

const sayHi = (name) => {
    console.log(`Hi, I am ${name}`);
}
module.exports = sayHi;