
const fetch = require('node-fetch');

const validateLinks = (arrayPrint) => {
    return Promise.all(arrayPrint.map(element => {
        return fetch(element.href)

            .then(response => {
                element.status = response.status
                if (response.status >= 200 && response.status < 400) {
                    element.ok = response.statusText
                } else {
                    element.ok = "Fail"
                }
                return element
            })
            // .then(response => response.status)
            // .then(data => {
            //     element.status = data
            //     if (data >= 200 && data < 400) {
            //         element.ok = "OK"
            //     } else {
            //         element.ok = "Fail"
            //     }
            //     return element
            //     // console.log("resultado",element);
            // })
            .catch(error => console.error('Error:', error))
            
    }))

}

module.exports = validateLinks;