//Modules - Encapsulated Code (only share minimum)
//CommonJS, every file is module (by default)

const names = require('./4-first_module_names')
console.log(names)

const sayHi = require('./5-utils')
console.log(sayHi)
sayHi('susan')
sayHi(names.gabby)
sayHi(names.tarik)

//to access your modules you use module.exports = ; when you excute in the main app file you assign to a variable first