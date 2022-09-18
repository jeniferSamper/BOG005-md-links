const {mdLinks} = require('../src/index');
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

