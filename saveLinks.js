const fs = require('fs');
const myPath = require('path');
const { marked } = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { readDirectory } = require('./readDirectory.js');

let arrayMD = [];
const saveLinks = (path) => {
    let arrayLinks = [];
    arrayMD = readDirectory(path);
    console.log("QUE LLEGO 12", arrayMD);

    return new Promise((resolve, reject) => {
        if (arrayMD.length > 0) {
            const promises = arrayMD.map((fileMd) => {
                new Promise((resolve, reject) => {
                    fs.readFile(fileMd, 'utf-8', (error, data) => {
                        if (error) {
                            console.log("error de leer elemento");
                        } else {
                            // console.log("data de readfile 17", data);
                            const html = marked(data)
                            const dom = new JSDOM(html)
                            const links = dom.window.document.querySelectorAll('a')
                            // funcion constructora
                            function createArray(file, href, text) {
                                this.file = file;
                                this.href = href;
                                this.text = text;
                            }
                            links.forEach(link => {
                                const objLink = new createArray(fileMd, link.href, link.text)
                                arrayLinks.push(objLink)
                            })
                        }
                        // console.log("array links 33",arrayLinks)
                        resolve(arrayLinks)
                    })
                })
            })
            resolve(promises);
        } else {
            reject("REJECT no existen links");
        }
    })
}
module.exports = { saveLinks }
