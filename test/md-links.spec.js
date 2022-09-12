const mdLinks = require('../');
const mocksData = require('./mocksData.js');


describe('mdLinks opcions validate true', () => {
  it('mdLinks get a file MD and validate:true and return an array of object',async () => {
   await mdLinks(mocksData.pathMD, { validate: true })
     .then((res) => {
       expect(res).toEqual(mocksData.dataValidateTrue)
     })
 })
})

describe('mdLinks', () => {
  it('mdLinks get a file MD and validate:false and return an array of object', async() => {
     await mdLinks(mocksData.pathMD, { validate: false })
      .then((res) => {
        console.log("mock false",mocksData.dataValidateFalse);
        expect(res.toString()).toEqual(mocksData.dataValidateFalse.toString())
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

