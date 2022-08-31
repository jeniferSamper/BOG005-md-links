const fs = require('fs');
const myPath = require('path');
const { marked } = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let arrayMD= [];
const readDirectory = (pathAbsolute) => {
    if (myPath.extname(pathAbsolute) == "") {
      let directorio = []
      directorio= fs.readdirSync(pathAbsolute)
      // fs.readdir(pathAbsolute, (error, list) => {
      //   if (error) {
      //     return console.log("error directorio");
      //   } else {
      //     console.log("directorio", list)
      //     list.forEach(listado => {
      //       listado = myPath.join(pathAbsolute, listado)
           directorio.forEach(listado => {
            listado = myPath.join(pathAbsolute, listado)
            // console.log("listado",listado);
            if (myPath.extname(listado) == "") {
              readDirectory(listado)
            } else {
              arrayMD.push(listado)
            }
          })
      
      // })
    } else {
      arrayMD.push(pathAbsolute)
    }
    // console.log("arrayMD 31", arrayMD)
    return arrayMD;
  }
  
  module.exports = {readDirectory}