const {mdLinks} = require('../src');
const mocksData = require('./mocksData.js');

describe('mdLinks', () => {
  it('mdLinks get a file MD and validate:false and return an array of object', (done) => {
      mdLinks(mocksData.pathMD, { validate: false })
      .then((res) => {
        expect(res).toEqual(mocksData.dataValidateFalse)
        done();
      })
      .catch(res => {console.error(res)})
  })
})

describe('mdLinks opcions validate true', () => {
  it('mdLinks get a file MD and validate:true and return an array of object', (done) => {
      mdLinks(mocksData.pathMD, { validate: true })
          .then((res) => {
              expect(res).toEqual(mocksData.dataValidateTrue)
              done()
          })
          .catch(res => {console.error(res)})
  })
})





// //este test funciona
// describe('mdLinks', () => {
// 	test('mdlinks recibe ruta .md', () => {
// 		return mdLinks('C:\\Users\\torbe\\BOG005-md-links\\test\\prueba.md',{validate:false}).then((res) => {
// 			expect(res).toEqual(data);
// 		});
// 	});})

