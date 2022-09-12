
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
                // console.log("element", element);
                return element
            })
            .catch(error => console.error('Error:', error))
    }))

}

module.exports = validateLinks;