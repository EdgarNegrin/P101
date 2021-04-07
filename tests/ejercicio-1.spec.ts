import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-1';

describe('Decodificador de resistencias tests', () => {
  it('decodeResistor([\'Marron\', \'Verde\'])', () => {
    expect(decodeResistor('Marron', 'Verde')).to.be.equal(15);
  });
  it('decodeResistor([\'Marron\', \'Verde\', \'Blanco\'])', () => {
    expect(decodeResistor('Marron', 'Verde', 'Blanco')).to.be.equal(15);
  });
});
