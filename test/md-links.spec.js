const {mdLinks} = require('../src/index');
const statsLinks = require('../src/statsLinks.js');
const mocksData = require('./mocksData.js');

jest.mock ("node-fetch", ()=> {
  return jest.fn(() => Promise.resolve({status: 200, statusText: "OK"}))
});


describe('mdLinks opcions validate true', () => {
  it('mdLinks get a file MD and validate:true and return an array of object', () => {
    return mdLinks(mocksData.pathMD, { validate: true })
      .then((res) => {
        expect(res).toEqual(mocksData.dataValidateTrue)
      });
  });
});

describe('mdLinks', () => {
  it('mdLinks get a file MD and validate:false and return an array of object', () => {
    return mdLinks(mocksData.pathMD, { validate: false })
      .then((res) => {
        expect(res).toEqual(mocksData.dataValidateFalse)
      });
  });
});


describe('mdLinks opcions validate true', () => {
  it('mdLinks get a file MD and validate:true and return an array of object', (done) => {
      mdLinks(mocksData.pathMD, { validate: true })
          .then((res) => {
              expect(res).toEqual(mocksData.dataValidateTrue)
              done()
          })
          .catch(res => {console.error(res)})
  })})

  describe('statsLinks', () => {
    it('statsLinks get an array of object and return stats', () => {
          expect(statsLinks(mocksData.dataValidateTrue)).toEqual(mocksData.mockStats)
        })
        .catch(res => {console.error(res)})
    })