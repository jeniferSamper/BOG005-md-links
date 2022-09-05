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

  let opcions = {
    validate: false,
    stats: false,
  }
const int3 = process.argv[3];
const int4 = process.argv[4];
if (int3== '--validate' || int3== '--v' || int4== '--validate' || int4== '--v' ){
  opcions.validate = true
}

if (int3== '--stats' || int3== '--s' || int4== '--stats' ||int4== '--s' ){
    opcions.stats = true
}
  
mdLinks(pathAbsolute, opcions)
