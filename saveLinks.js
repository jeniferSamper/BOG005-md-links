const fs = require('fs');
const { marked } = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { readDirectory } = require('./readDirectory.js');


let arrayMD = [];
let arrayLinks = [];
const saveLinks = (path) => {
    arrayMD = readDirectory(path);

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
            }
             else {
                reject("REJECT no existen links");
            }
        })
        return promise1
    }
module.exports = { saveLinks }
