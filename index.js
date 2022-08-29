

// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const myPath = require('path');
const { marked } = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


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
//   const rutaAbsoluta = myPath.resolve(__dirname, path)
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
  const rutaAbsoluta = myPath.resolve(__dirname, path) //convierto la ruta en absoluta
  console.log("absolutaa", rutaAbsoluta);
  if (!fs.existsSync(rutaAbsoluta)) {
    console.log("la ruta no existe");
  } else {
    readDirectory(rutaAbsoluta)
  }
}

const readDirectory = (rutaAbsoluta) => {
  if (myPath.extname(rutaAbsoluta) == "") {
    fs.readdir(rutaAbsoluta, (error, list) => {
      if (error) {
        return console.log("error directorio");
      } else {
        console.log("directorio", list)
        list.forEach(listado => {
          listado = myPath.join(rutaAbsoluta, listado)
          console.log("pendiente", listado)
          if (myPath.extname(listado) == "") {
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
  console.log(path);
  if (myPath.extname(path) == ".md") {
    //leo archivo
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        console.log("error de leer elemento");
      } else {
      saveLinks(data, path)
       .then(res =>{
        console.log(res)
       })
       .catch (error => {
        console.error(error)
       })
      }
    })
  } else {
    return console.log(`el archivo ${path} no es un archivo .md`)
  }
}

const saveLinks = (data, path)=>{
  const html = marked(data)
  // console.log("html",html);
  const dom = new JSDOM(html)
  // const links = dom.window.document.getElementsByTagName('a') // si quiero usar un for of si sirve
  const links = dom.window.document.querySelectorAll('a')
  // console.log("numero de links",links.length);
  // console.log("type", typeof links);
  // console.log(links[1].href);
  // console.log(links[1].text);

  // funcion constructora
 function createArray (file, href, text){
  this.file = file;
  this.href = href;
  this.text = text;
 }

  let arrayLinks = []
        // return console.log("arraylinks",arrayLinks)
  return new Promise((resolve, reject) => {
    if(links.length>0){
       links.forEach(link =>{
        // for(let entry of links){
        const objLink = new createArray (path, link.href, link.text)
        // const objLink = new createArray (path, entry.href, entry.text)
        arrayLinks.push(objLink)})
        resolve (arrayLinks)
      } else {
        reject ("no existen links");
      }
  })
}


module.exports = mdLinks