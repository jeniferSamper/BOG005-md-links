const statsLinks = require('../src/statsLinks.js');
const mocksData = require('./mocksData.js');


describe('statsLinks', () => {
  it('statsLinks get an array of object and return stats', () => {
        expect(statsLinks(mocksData.dataValidateTrue)).toEqual(mocksData.mockStats)
      })
  })