// const mdLinks1 = require ('./index.js')
const fs = require('fs');
const mdLinks = require('./index.js');

// //prueba
// mdLinks1(process.argv[2], process.argv[3], process.argv[4], process.argv[5]) 
// console.log("arg4", process.argv[4])
// console.log("arg5", process.argv[5])

mdLinks(process.argv[2], process.argv[3])