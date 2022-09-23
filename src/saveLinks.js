const fs = require('fs');
const { marked } = require('marked');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const saveLinks = (arrayMD) => {
    let arrayLinks = [];
    if (arrayMD.length > 0) {
        return Promise.all(arrayMD.map((fileMd) => {
            return new Promise((resolve, reject) => {
                try {
                    fs.readFile(fileMd, 'utf-8', (error, data) => {
                        if (error) {
                            reject("error de leer: "+ fileMd);
                        } else {
                            const html = marked(data)
                            const dom = new JSDOM(html)
                            const links = dom.window.document.querySelectorAll('a')

                            links.forEach(link => {
                                if (link.href.includes('http')) {
                                    const dataObj = {
                                        file: fileMd,
                                        href: link.href,
                                        text: link.text,
                                        status: "",
                                        ok: "",
                                    }
                                    arrayLinks.push(dataObj);
                                }
                            })
                            resolve(arrayLinks)
                        }
                    })
                } catch (err) { reject (err) }
            })
        })
        )
    }
    else {
        reject("no existen links");
    }
}
module.exports = { saveLinks }
