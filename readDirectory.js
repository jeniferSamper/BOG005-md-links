const fs = require('fs');
const myPath = require('path');


let arrayMD= [];

const readDirectory = (pathAbsolute) => {
  
    if (myPath.extname(pathAbsolute) == "") {
      let directory = []
      directory = fs.readdirSync(pathAbsolute)
           directory.forEach(listado => {
            listado = myPath.join(pathAbsolute, listado)
            if (myPath.extname(listado) == "") {
              readDirectory(listado)
            } else if(myPath.extname(listado) == ".md") {
              arrayMD.push(listado)
            }
          })
    } else {
      arrayMD.push(pathAbsolute)
    }
    return arrayMD;
  }
  
  module.exports = {readDirectory}