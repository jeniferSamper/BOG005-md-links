

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
          validateLinks(arrayPrint, opcions)
          .then(ress => {
            console.log("que llego",ress);
            resolve(ress)
          })
          //resolve de validate links
        })
        .catch(error => {
          console.error(error)
        })
    })

  }

}

module.exports = mdLinks
