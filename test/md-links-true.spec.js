const {mdLinks} = require('../src/index');
const mocksData = require('./mocksData.js');



describe('mdLinks opcions validate true', () => {
    it('mdLinks get a file MD and validate:true and return an array of object', (done) => {
        mdLinks(mocksData.pathMD, { validate: true })
            .then((res) => {
                expect(res).toEqual(mocksData.dataValidateTrue)
                done()
            }).catch(console.error)
    })
})


