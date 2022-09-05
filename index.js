

// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const { saveLinks } = require('./saveLinks.js');
const { validateLinks } = require('./ValidateLinks.js');


const mdLinks = (pathAbsolute, opcions) => {
  let arrayPrint = []
  if (!fs.existsSync(pathAbsolute)) {
    console.log("la ruta no existe");
  } else {
    saveLinks(pathAbsolute)
   .then(res => {
    arrayPrint = res[0]
    // res.flat().filter ( (element, index) => element.text  )
      console.log("respuesta positiva" , arrayPrint );
      validateLinks(arrayPrint, opcions)
      
    })
    .catch (error => {
     console.error(error)
    })
  }

}

module.exports = mdLinks