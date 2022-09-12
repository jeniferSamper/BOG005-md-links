
const { saveLinks } = require('./saveLinks.js');
const validateLinks = require('./validateLinks.js');
const { readDirectory } = require('./readDirectory.js');



const mdLinks = (pathAbsolute, opcions) => {
let arrayPrint = []
let arrayMD = [];

  arrayMD = readDirectory(pathAbsolute);
  return new Promise((resolve, reject) => {
    saveLinks(arrayMD)
      .then(res => {
        arrayPrint = res[0]
        if (opcions.validate == true) {
          validateLinks(arrayPrint)
            .then(res => {
              // console.log("que llega", res);
              resolve(res) //resolve de validate links
            })
        } else {
          resolve(arrayPrint)
        }
      })
      .catch(error => {
        console.error(error)
      })
  })
}

module.exports = mdLinks


// module.exports = () => {
//   // ...
// };