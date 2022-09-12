const mdLinks = require('../');
const mocksData = require('./mocksData.js');

describe('mdLinks', () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it('mdLinks get a file MD and validate:false and return an array of object', () => {
    return mdLinks(mocksData.pathMD, { validate: false })
      .then((res) => {
        expect(res).toEqual(mocksData.dataValidateFalse)
      })
  })

  it('mdLinks get a file MD and validate:true and return an array of object', () => {
    return mdLinks(mocksData.pathMD, { validate: true })
      .then((res) => {
        console.log("esta duplicado?", res);
        expect(res).toEqual(mocksData.dataValidateTrue)
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

