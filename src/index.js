
const { saveLinks } = require('./saveLinks.js');
const validateLinks = require('./ValidateLinks.js');
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
              resolve(res) //resolve de validate links
            
            })
        } else {
          resolve(arrayPrint)
        }
      })
      .catch(error => {reject(error)})
  })
}


module.exports = {mdLinks}


// module.exports = () => {
//   // ...
// };
