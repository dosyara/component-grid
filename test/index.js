import 'babel-polyfill';
import Grid from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme()).should();
describe('Grid', () => {
  it('renders a React element', () => {
    React.isValidElement(<Grid />).should.equal(true);
  });
});
