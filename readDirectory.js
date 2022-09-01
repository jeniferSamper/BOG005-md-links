const fs = require('fs');
const myPath = require('path');
const { marked } = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


let arrayMD= [];

const readDirectory = (pathAbsolute) => {
  
    if (myPath.extname(pathAbsolute) == "") {
      let directory = []
      directory = fs.readdirSync(pathAbsolute)
      // fs.readdir(pathAbsolute, (error, list) => {
      //   if (error) {
      //     return console.log("error directory");
      //   } else {
      //     console.log("directory", list)
      //     list.forEach(listado => {
      //       listado = myPath.join(pathAbsolute, listado)
           directory.forEach(listado => {
            listado = myPath.join(pathAbsolute, listado)
            // console.log("listado",listado);
            if (myPath.extname(listado) == "") {
              readDirectory(listado)
            } else if(myPath.extname(listado) == ".md") {
              arrayMD.push(listado)
            }
          })
      
      // })
    } else {
      arrayMD.push(pathAbsolute)
    }
    return arrayMD;
  }
  
  module.exports = {readDirectory}