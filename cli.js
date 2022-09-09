#!/usr/bin/env node


const fs = require('fs');
const mdLinks = require('./index.js');
const path = require('path');
const statsLinks = require('./statsLinks.js');

let argv = process.argv

const validateInput = () => {
let myPath = argv[2];
  pathAbsolute = path.resolve(myPath)
  if (path.isAbsolute(myPath)) {
    pathAbsolute = myPath
  } else {
    pathAbsolute = path.resolve(myPath) //convierto la ruta en absoluta
  }
  let opcions = {
    validate: false,
    stats: false,
  }
  if (argv.includes("--validate") || argv.includes("--v")) {
    opcions.validate = true;
  }
  if (argv.includes("--stats") || argv.includes("--s")) {
    opcions.stats = true;
  }
  if (!fs.existsSync(pathAbsolute)) {
    console.log("la ruta no existe");
  } else {
    mdLinks(pathAbsolute, opcions)
      .then(res => {
        const stats = statsLinks(res)
        if (opcions.stats == false) {
          res.forEach(arrayPrint => {
            console.log(arrayPrint.file, arrayPrint.href.slice(0, 51), arrayPrint.text.slice(0, 51), arrayPrint.status, arrayPrint.ok);
          });
        } else if (opcions.stats == true && opcions.validate == true) {
          console.log(`Total: ${stats.total} \nUnique: ${stats.unique}\nBroken: ${stats.broken}`);
        } else if (opcions.stats == true && opcions.validate == false) {
          console.log(`Total: ${stats.total}\nUnique: ${stats.unique}`);
        }
      })
  }

}

validateInput(argv);
