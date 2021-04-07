import 'mocha';
import {expect} from 'chai';
import {ImperialLength} from '../src/imperialLength';
import { LengthAdapter } from '../src/lengthAdapter';

describe('Imperial Length', () => {
  it('De yardas a m', () => {
    let imperial = new ImperialLength([72, 'yardas']);
    let adapter = new LengthAdapter(imperial);
    expect(adapter.getByM()).to.be.eql([65.8368, 'm']);
  });
  it('De pulgadas a cm', () => {
    let imperial = new ImperialLength([72, 'pulgadas']);
    let adapter = new LengthAdapter(imperial);
    expect(adapter.getByCm()).to.be.eql([182.88, 'cm']);
  });
  it('De pies a km', () => {
    let imperial = new ImperialLength([300, 'pies']);
    let adapter = new LengthAdapter(imperial);
    expect(adapter.getByKm()).to.be.eql([0.09144, 'km']);
  });
});
