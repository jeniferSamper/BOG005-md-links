

// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path1 = require('path');

// //funcion mdLinks miniproblemas readme
// const mdLinks1 = (file, carpeta, rutaA, rutaB) => {
//   //lee el contenido del archivo
//   fs.readFile(file, 'utf-8', (error, data) => {
//     if (error) {
//       console.log("error");
//     } else {
//       console.log("El contenido es: ", data);
//     }
//   })

//   //lee extension del archivo
//   console.log(" la extension es", path.extname(file))

//   //lee directorio de un archivo
//   fs.readdir(carpeta, (error, list) => {
//     if (error) {
//       console.log("error error");
//     } else {
//       console.log("directorio", list)
//     }

//   })

//   //una dos rutas 
//   // console.log(`El separador en mi Sistema Operativo es: ${path.sep}`)
//   const ruta = path.join(rutaA , rutaB)
//   const archivo = path.basename(ruta)
//   console.log("archivo", archivo)
//   console.log("ruta relativa", ruta)
//   const rutaAbsoluta = path.resolve(__dirname, ruta)
// console.info("ruta absoluta ",rutaAbsoluta)
// }
// module.exports = mdLinks1 


// const mdLinks = (path, options) => {
//   const rutaAbsoluta = path1.resolve(__dirname, path)
//   console.log(rutaAbsoluta);
//   if (fs.existsSync(rutaAbsoluta)) {
//     console.log("El archivo EXISTE!");
//     if (path1.extname(path)==""){
//       console.log("es un directorio")
//       //revisar carpetas dentro
//       fs.readdir(path, (error, list) => {
//             if (error) {
//               console.log("error error");
//             } else {
//               console.log("directorio", list)
//               if (path1.extname(list[0])==""){
//                 console.log("es un directorio")
//               } else {
//                 console.log("es un archivo");
//               }
//             }

//     })
//     console.log("extension",path1.extname(path));
//     }
//   } else {
//     console.log("El archivo NO EXISTE!");


const mdLinks = (path) => {
  const rutaAbsoluta = path1.resolve(__dirname, path) //convierto la ruta en absoluta
  if (!fs.existsSync(rutaAbsoluta)) {
    console.log("la ruta no existe");
  } else {
    readDirectory(rutaAbsoluta)
  }
}

const readDirectory = (rutaAbsoluta) => {
  if (path1.extname(rutaAbsoluta) == "") {
    fs.readdir(rutaAbsoluta, (error, list) => {
      if (error) {
        return console.log("error directorio");
      } else {
        console.log("directorio", list)
        list.forEach(listado => {
          listado = path1.join(rutaAbsoluta, listado)
          if (path1.extname(listado) == "") {
            readDirectory(listado)
          } else {
            readFile(listado)
          }
        }
        )
      }
    })
  } else {
    readFile(rutaAbsoluta)
  }
}

const readFile = (path) => {
  if (path1.extname(path) == ".md") {
    //leo archivo
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        console.log("error de leer elemento");
      } else {
        console.log("El contenido es: ", data);
      }
    })
  } else {
    return console.log(`el archivo ${path} no es un archivo .md`)
  }
}

module.exports = mdLinks