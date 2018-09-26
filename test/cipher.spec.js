global.window = global;
require('../src/cipher');
require('./cipher.spec.js');
const expect = require('expect')

describe('cipher', () => {

  describe('cipher.object', () => {

    it('debería ser un objeto', () => {
      expect(typeof cipher).toBe('object');
    });

  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function')
    });

      it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() =>{
        expect(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("HIJKLMNOPQRSTUVWXYZABCDEFG");
     });
     
     it('debería retornar "lqltwsv #4" para "ejemplo #1" con offset 33',() =>{
      expect(cipher.encode(33,"ejemplo #1")).toBe("lqltwsv #4"); 
     });
    
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
      expect(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG")).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
     });
     it('debería retornar "ejemplo #1" para "lqltwsv #4" con offset 33',() =>{
      expect(cipher.decode(33,"lqltwsv #4")).toBe("ejemplo #1"); 
     }); 

  });

});
