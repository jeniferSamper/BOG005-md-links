const fs = require('fs');
const myPath = require('path');
const { marked } = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { readDirectory } = require('./readDirectory.js');
const fsPromises = require('fs').promises;

let arrayMD = [];
const saveLinks = (path) => {
    let arrayLinks = [];
    arrayMD = readDirectory(path);
    // console.log("QUE LLEGO 12", arrayMD);

    let promise1 = new Promise((resolve, reject) => {
        if (arrayMD.length > 0) {
            const promises = Promise.all(arrayMD.map((fileMd) => {
                return new Promise((resolve, reject) => {
                    fs.readFile(fileMd, 'utf-8', (error, data) => {
                        if (error) {
                            console.log("error de leer elemento");
                        } else {
                            const html = marked(data)
                            const dom = new JSDOM(html)
                            const links = dom.window.document.querySelectorAll('a')
                            links.forEach(link => {
                                const dataObj = {
                                    file: fileMd,
                                    href: link.href,
                                    text: link.text,
                                }
                                arrayLinks.push(dataObj);
                            })

                            resolve(arrayLinks)
                        }
                    })
                })
            })
            )
            resolve(promises);
        } else {
            reject("REJECT no existen links");
        }
    })
    return promise1
}

//             // const promises = arrayMD.map((fileMd) => {
//             //     return new Promise((resolve, reject) => {
//             //         fs.readFile(fileMd, 'utf-8', (error, data) => {
//             //             if (error) {
//             //                 console.log("error de leer elemento");
//             //             } else {
//             //                 // console.log("data de readfile 17", data);
//             //                 const html = marked(data)
//             //                 const dom = new JSDOM(html)
//             //                 const links = dom.window.document.querySelectorAll('a')
//             //                 // funcion constructora
//             //                 function createArray(file, href, text) {
//             //                     this.file = file;
//             //                     this.href = href;
//             //                     this.text = text;
//             //                 }
//             //                 links.forEach(link => {
//             //                     // console.log("elemento",link);
//             //                     const dataObj = new createArray(fileMd, link.href, link.text)
//             //                     arrayLinks.push(objLink)
//             //                     // console.log("objeto pusheado",objLink);
//             //                 })
//             //                 // console.log("array links", arrayLinks);
//             //                 resolve(arrayLinks)
//             //             }
//             //             // console.log("array links 33",arrayLinks)
//             //         })
//             //     })
//             // })
// //             resolve(promises);
// //         } else {
// //             reject("REJECT no existen links");
// //         }
// //     })
// //     return promise1
// // }


// //intento sin callback
// // const saveLinks = (path) => {
// //     let arrayLinks = [];
// //     arrayMD = readDirectory(path);
// //     return new Promise((resolve, reject) => {
// //         if (arrayMD.length > 0) {
// //             arrayMD.forEach((fileMd) => {
// //                 fsPromises.readFile(fileMd, 'utf-8').then(
// //                     file => {
// //                         const html = marked(file)
// //                         const dom = new JSDOM(html)
// //                         const links = dom.window.document.querySelectorAll('a')
// //                         console.log("links", links.length);
// //                         // funcion constructora
// //                         function createArray(file, href, text) {
// //                             this.file = file;
// //                             this.href = href;
// //                             this.text = text;
// //                         }
// //                         links.forEach(link => {
// //                             const objLink = new createArray(path, link.href, link.text)
// //                             arrayLinks.push(objLink)
// //                         })

// //                     }
// //                 )
// //             })
// //             resolve(arrayLinks)
// //             // console.log("array links 33",arrayLinks)
// //         }
// //     })
// // }

//intento con callback
// const saveLinks = (path) => {
//     let arrayLinks = [];
//     arrayMD = readDirectory(path);


// return new Promise((resolve, reject) => {
//     if (arrayMD.length > 0){
//         arrayMD.forEach((fileMd) => {
//             fs.readFile(fileMd, 'utf-8', (error, data) => {
//                 if (error) {
//                     console.log("error de leer elemento");
//                 } else {
//                     // console.log("data de readfile 17", data);
//                     const html = marked(data)
//                     const dom = new JSDOM(html)
//                     const links = dom.window.document.querySelectorAll('a')
//                     console.log("links", links.length);
//                     // funcion constructora
//                     function createArray(file, href, text) {
//                         this.file = file;
//                         this.href = href;
//                         this.text = text;
//                     }
//                     links.forEach(link => {
//                         const objLink = new createArray(path, link.href, link.text)
//                         arrayLinks.push(objLink)
//                     })
//                     resolve (arrayLinks)}
//             // console.log("array links 33",arrayLinks)
//             })
//     })
//     }else {
//                 reject("no existen links");
//               }
// })      
// }



module.exports = { saveLinks }
