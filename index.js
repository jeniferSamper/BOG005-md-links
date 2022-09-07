

// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const { saveLinks } = require('./saveLinks.js');
const validateLinks = require('./validateLinks.js');


const mdLinks = (pathAbsolute, opcions) => {
  let arrayPrint = []
  if (!fs.existsSync(pathAbsolute)) {
    console.log("la ruta no existe");
  } else {
    return new Promise((resolve, reject) => {
      saveLinks(pathAbsolute)
        .then(res => {
          arrayPrint = res[0]
          // res.flat().filter ( (element, index) => element.text  )
          if (opcions.validate == true) {
            validateLinks(arrayPrint)
              .then(res => {
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
}

module.exports = mdLinks
