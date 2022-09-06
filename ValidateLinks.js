
const fetch = require('node-fetch');

const validateLinks = (arrayPrint, opcions) => {
    return new Promise((resolve, reject) => {
        if (opcions.validate == true) {
            arrayPrint.forEach(element => {
                fetch(element.href)
                    .then(response => response.status)
                    .then(data => {
                        element.status = data
                        if (data >= 200 && data < 400) {
                            element.ok = "OK"
                        } else {
                            element.ok = "Fail"
                        }
                        // console.log("resultado",element);
                    });
            })

        } resolve(arrayPrint)
    })
}



module.exports = validateLinks;