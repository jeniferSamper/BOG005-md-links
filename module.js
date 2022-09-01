// const mdLinks1 = require ('./index.js')
const fs = require('fs');
const mdLinks = require('./index.js');
const myPath = require('path');

let path = process.argv[2]
if (myPath.isAbsolute(path)) {
    pathAbsolute = path
  } else {
    pathAbsolute = myPath.resolve(path) //convierto la ruta en absoluta
  }

//   let opcions = {
//     validate: false,
//     stats: false,
//   }
// if (process.argv[3]== '--validate' || process.argv[3]== '--v' || process.argv[4]== '--validate' || process.argv[4]== '--v' ){
//     opcions.validate = true,
// }
  
mdLinks(pathAbsolute, process.argv[3])
