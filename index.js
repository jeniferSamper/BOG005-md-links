

// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const myPath = require('path');
const { marked } = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const {saveLinks} = require('./saveLinks.js');


const mdLinks = (path) => {
  let array = []
  let pathAbsolute;
  if(myPath.isAbsolute(path)){
    pathAbsolute = path 
  } else {
    pathAbsolute = myPath.resolve(path) //convierto la ruta en absoluta
  }
  console.log("absolutaa", pathAbsolute);
  if (!fs.existsSync(pathAbsolute)) {
    console.log("la ruta no existe");
  } else {
   saveLinks(pathAbsolute).then(res => {Promise.all(res).then (x=>{console.log("total", x)})})
      // console.log("longitud", array.length);
      // console.log(" respuesta positiva" ,array);
    .catch(error => {
      console.error(error)
    })
    // const result = mdLinks(arrayMdFiles).then(content => {Promise.all(content).then(x => {console.log(x)})})

  }
}



module.exports = mdLinks