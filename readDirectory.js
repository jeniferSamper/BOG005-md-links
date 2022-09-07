const fs = require('fs');
const path = require('path');


let arrayMD= [];

const readDirectory = (pathAbsolute) => {
  
    if (path.extname(pathAbsolute) == "") {
      let directory = []
      directory = fs.readdirSync(pathAbsolute)
           directory.forEach(listado => {
            listado = path.join(pathAbsolute, listado)
            if (path.extname(listado) == "") {
              readDirectory(listado)
            } else if(path.extname(listado) == ".md") {
              arrayMD.push(listado)
            }
          })
    } else if(path.extname(pathAbsolute) == ".md") {
      arrayMD.push(pathAbsolute)
    }
    return arrayMD;
  }
  
  module.exports = {readDirectory}