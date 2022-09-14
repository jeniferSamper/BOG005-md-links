const {mdLinks} = require('../src/index');
const mocksData = require('./mocksData.js');


describe('mdLinks', () => {
  it('mdLinks get a file MD and validate:false and return an array of object', (done) => {
      mdLinks(mocksData.pathMD, { validate: false })
      .then((res) => {
        expect(res).toEqual(mocksData.dataValidateFalse)
        done();
      })
  })
})





// //este test funciona
// describe('mdLinks', () => {
// 	test('mdlinks recibe ruta .md', () => {
// 		return mdLinks('C:\\Users\\torbe\\BOG005-md-links\\test\\prueba.md',{validate:false}).then((res) => {
// 			expect(res).toEqual(data);
// 		});
// 	});})

