#!/usr/bin/env node


const fs = require('fs');
const mdLinks = require('./index.js');
const path = require('path');

let myPath = process.argv[2]
if (path.isAbsolute(myPath)) {
    pathAbsolute = path
  } else {
    pathAbsolute = path.resolve(myPath) //convierto la ruta en absoluta
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
.then(res => {
  res.forEach(element => {
    console.log(element.file, element.href.slice(0, 51), element.text.slice(0, 51), element.status, element.ok);
  });
})

