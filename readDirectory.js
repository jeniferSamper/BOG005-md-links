const fs = require('fs');
const myPath = require('path');
const { marked } = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const readDirectory = (pathAbsolute) => {
  let arrayMD= [];
    if (myPath.extname(pathAbsolute) == "") {
      fs.readdir(pathAbsolute, (error, list) => {
        if (error) {
          return console.log("error directorio");
        } else {
          console.log("directorio", list)
          list.forEach(listado => {
            listado = myPath.join(pathAbsolute, listado)
            console.log("pendiente", listado)
            if (myPath.extname(listado) == "") {
              readDirectory(listado)
            } else {
              arrayMD.push(listado)
            }
          }
          )
        }
      })
    } else {
      arrayMD.push(pathAbsolute)
    }
    return arrayMD;
  }
  
  module.exports = {readDirectory}