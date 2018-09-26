global.window = global;
require('../src/cipher');
const expect = require('expect')

describe('cipher.hacker', () => {

    describe('cipher.createCipherWithOffset', () => {
  
      it('debería ser una función', () => {
        expect(typeof cipher.createCipherWithOffset).toBe('function')
      });
  
      it('debería retornar una función llamada (encode y decode) con offset fijado ', () => {
        expect((cipher.createCipherWithOffset(33)).encode("abc")).toBe(cipher.encode(33,"abc"))
      });
      
    });
  
});
  