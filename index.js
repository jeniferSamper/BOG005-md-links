

// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const myPath = require('path');
const { marked } = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { saveLinks } = require('./saveLinks.js');


const mdLinks = (pathAbsolute) => {
  let array = []
  let arrayPrint = []
  if (!fs.existsSync(pathAbsolute)) {
    console.log("la ruta no existe");
  } else {
    // saveLinks(pathAbsolute)

    //   .then(res => {
    //     console.log("res",res);
    //     // Promise.all(res).then(x => {
    //     //   console.log("print",x);
    //     // })
    //   })
    //   .catch(error => {console.error(error)})
    saveLinks(pathAbsolute)
   .then(res => {
      array = res
      console.log(" respuesta positiva" ,array);
    })
    .catch (error => {
     console.error(error)
    })

  }
}

module.exports = mdLinks